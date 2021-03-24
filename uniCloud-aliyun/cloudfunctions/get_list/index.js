'use strict';
// 获取数据库引用
const db = uniCloud.database();
exports.main = async (event, context) => {
	let list = await db.collection('article').field({
		content: false
	}).get()

	//返回数据给客户端
	return {
		code: 200,
		msg: "请求成功",
		data: list.data
	}
};
