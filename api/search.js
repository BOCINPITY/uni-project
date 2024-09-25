export async function getSearchData(text){
	const {result} = await uniCloud.callFunction({
		name:"search_get_data",
		data:{
			text:text
		}
	})
	return result
}