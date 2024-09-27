export async function getArticleList(classify = "全部", pageSize = 10, current = 1) {
	const {result} = await uniCloud.callFunction({
		name: "article_get_list",
		data: {
			pageSize,
			current,
			classify
		}
	})
	console.log(result)
	return {
		list:result.res.list,
		total:result.res.total
	}
}