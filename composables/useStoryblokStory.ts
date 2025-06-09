import { useStoryblokApi } from '#imports';

export const useStoryblokStory = (slug: string) => {
  const storyblokApi = useStoryblokApi()

  const route = useRoute()
  const hostname = process.client ? window.location.hostname : ''

  const isInEditor = route.query._storyblok !== undefined
  const isLiveDomain = hostname === 'www.example.com'

  const version = isInEditor || !isLiveDomain ? 'draft' : 'published'

  return useAsyncData(`storyblok-${slug}`, async () => {
    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
      version,
    })
    return data.story
  })
}