<script setup lang="ts">
const props = defineProps<{
	h2?: string
	submitFunction?: (email: string, password: string) => void
	submitBtn?: string
}>()

const { feedback } = useFormValidation()
const email = ref('')
const password = ref('')
const submitDisabled = computed(() =>
	!email.value || !password.value ? true : false,
)
</script>

<template>
	<MemberCard class="aspect">
		<form
			@submit.prevent="
				() => {
					if (submitFunction) submitFunction(email, password)
				}
			"
			class="w-100 h-100 d-flex flex-col center gap-2"
		>
			<section class="flex-grow d-grid fr-2 gap-1">
				<section class="d-flex flex-col center gap-1">
					<img src="@img/logo.svg" height="64" />
					<h2>{{ h2 }}</h2>
				</section>

				<section class="grid-col-2 d-flex flex-col center gap-05">
					<FormField
						type="email"
						id="email"
						placeholder="storybean@protonmail.com"
						v-model="email"
						:required="true"
						label="E-mail"
						feedbackKey="email"
					/>

					<FormField
						type="password"
						id="password"
						v-model="password"
						:required="true"
						label="Password"
						feedbackKey="password"
					/>
				</section>
			</section>

			<section class="w-100 d-flex flex-col center gap-1">
				<p v-if="feedback.main && feedback.main.msg" class="form-feedback">
					<span class="icon">error</span>
					<span v-html="feedback.main.msg"></span>
				</p>

				<Button
					type="submit"
					class="w-100"
					btnType="primary"
					:disabled="submitDisabled"
				>
					{{ submitBtn ? submitBtn : 'Submit' }}
				</Button>
			</section>
		</form>
	</MemberCard>
</template>
