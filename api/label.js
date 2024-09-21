export async function getLabelList() {
	const  {result} = await uniCloud.callFunction({name: "label_get_list"})
	if(result.code === 200){
		return  result.data
	}else{
		uni.showToast({
			icon:"error",
			title: result.msg
		})
		return new Error(result.msg)
	}
}