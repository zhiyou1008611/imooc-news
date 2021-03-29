'use strict';
// 获取数据库引用
const db = uniCloud.database();
exports.main = async (event, context) => {
	const dbCmd = db.command
	const {
		user_id,
		article_id
	} = event

	const userInfo = await db.collection('user').doc(user_id).get()
	const article_id_ids = userInfo.data[0].article_likes_ids
	let dbCmdFuns = null
	if (article_id_ids.includes(article_id)) {
		dbCmdFuns = dbCmd.pull(article_id)
	} else {
		dbCmdFuns = dbCmd.addToSet(article_id)
	}

	await db.collection('user').doc(user_id).update({
		article_likes_ids: dbCmdFuns
	})
	//event为客户端上传的参数
	console.log('event : ', event)

	//返回数据给客户端
	return {
		code: 200,
		msg: "成功",
		data: userInfo
	}
};

