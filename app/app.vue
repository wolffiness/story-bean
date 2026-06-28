<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

const config = useRuntimeConfig()
const supabase = createClient(
	config.public.supabase.url,
	config.public.supabase.key,
)
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
