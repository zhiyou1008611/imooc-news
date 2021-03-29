'use strict';
// 获取数据库引用
const db = uniCloud.database();
const $ = db.command.aggregate
exports.main = async (event, context) => {
	const {
		user_id,
		name,
		page = 1,
		pageSize = 10
	} = event;
	let matchs = {}
	if(name != "全部"){
		matchs = {
			classify: name
		}
	}
	
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_id_ids = userInfo.data[0].article_likes_ids
	
	let list = await db.collection('article')
		.aggregate()
		.addFields({
			is_like: $.in(['$_id', article_id_ids])
		})
		.match(matchs)
		.project({
			content: false
		})
		.skip(pageSize*(page-1))
		.limit(pageSize)
		.end()

	// let list = await db.collection('article').field({
	// 	content: false
	// }).get()

	//返回数据给客户端
	return {
		code: 200,
		msg: "请求成功",
		data: list.data
	}
};
