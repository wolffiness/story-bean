<script setup lang="ts">
import logoImg from '@img/logo.svg'

const props = defineProps<{
	h2?: string
	submitFunction?: (email: string, password: string, token: string) => void
	submitBtn?: string
	excludePasswordEval?: boolean
}>()

const { feedback } = useFormValidation()
const email = ref('')
const password = ref('')
const token = ref('')
const submitDisabled = computed(() =>
	!email.value || !password.value ? true : false,
)
</script>

<template>
	<CardMember class="aspect">
		<form
			class="w-100 h-100 d-flex flex-col center gap-2"
			@submit.prevent="
				() => {
					if (submitFunction) submitFunction(email, password, token)
				}
			"
		>
			<section class="flex-grow d-grid fr-2 gap-1">
				<section class="d-flex flex-col center gap-1">
					<UiImg alt="Logo" :src="logoImg" height="64" />
					<h2>{{ props?.h2 }}</h2>
				</section>

				<section class="grid-col-2 d-flex flex-col center gap-05">
					<UiInputForm
						id="email"
						v-model="email"
						type="email"
						placeholder="storybean@protonmail.com"
						:required="true"
						label="E-mail"
						feedback-key="email"
					/>

					<UiInputForm
						id="password"
						v-model="password"
						type="password"
						:required="true"
						label="Password"
						feedback-key="password"
						:exclude-password-eval="excludePasswordEval"
					/>

					<section class="w-100 d-flex flex-col gap-05">
						<NuxtTurnstile v-model="token" />
						<p
							v-if="feedback.captcha && feedback.captcha.msg"
							class="form-feedback"
						>
							<span class="icon">error</span>
							<!-- eslint-disable vue/no-v-html -- see cleanHtml() -->
							<span v-html="feedback.captcha.msg" />
							<!-- eslint-enable vue/no-v-html -->
						</p>
					</section>
				</section>
			</section>

			<section class="w-100 d-flex flex-col center gap-1">
				<p v-if="feedback.main && feedback.main.msg" class="form-feedback">
					<span class="icon">error</span>
					<!-- eslint-disable vue/no-v-html -- see cleanHtml() -->
					<span v-html="feedback.main.msg" />
					<!-- eslint-enable vue/no-v-html -->
				</p>

				<UiButton
					type="submit"
					class="w-100"
					btn-type="primary"
					:disabled="submitDisabled"
				>
					{{ submitBtn ? submitBtn : 'Submit' }}
				</UiButton>
			</section>
		</form>
	</CardMember>
</template>
