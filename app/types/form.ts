export type HTMLInputTypeAttribute =
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week'

export type FeedbackKeys =
	| `email${string}`
	| `password${string}`
	| `main${string}`
	| `captcha${string}`

export type FormFieldProps = {
	type: HTMLInputTypeAttribute
	id: string
	placeholder?: string
	required?: boolean
	label?: string
	feedbackKey: FeedbackKeys
	excludePasswordEval?: boolean
}
