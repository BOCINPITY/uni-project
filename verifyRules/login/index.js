import {
	reactive
} from 'vue';

export function validatePhone(text) {
	const phoneRegex = /^1[3-9]\d{9}$/;
	return phoneRegex.test(text)
}


export const rules = reactive({
	account: {
		rules: [{
				required: true,
				errorMessage: '请填写账号',
			},
			{
				minLength: 6,
				maxLength: 16,
				errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
			},
		],
		label: '账号',
	},
	password: {
		rules: [{
				required: true,
				errorMessage: '请填写密码',
			},
			{
				minLength: 8,
				maxLength: 16,
				errorMessage: '{label}长度在 {minLength} 到 {maxLength} 个字符',
			}
		],
		label: '密码',
	},
	phone: {
		rules: [{
				required: true,
				errorMessage: '请填写手机号',
			},
			{
				validateFunction: function(rule, value, data, callback) {
					if (!validatePhone(value)) {
						callback('请输入正确的手机号')
					}
					return true
				}
			}
		],
		label: '手机号',
	},
	vcode: {
		rules: [{
				required: true,
				errorMessage: '请填写验证码',
				trigger: ['blur', "change"]
			},
			{
				minLength: 4,
				maxLength: 4,
				errorMessage: '{label}长度{maxLength} 个字符',
			},
		],
		label: '验证码',
	},
})