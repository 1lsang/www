// glob 로더 가져오기
import { glob } from 'astro/loaders';
// `astro:content`에서 유틸리티 가져오기
import { z, defineCollection } from 'astro:content';

// 각 컬렉션에 대한 `loader` 및 `schema` 정의
const content = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/contents' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
  }),
});

// 단일 `collections` 객체를 내보내 컬렉션을 등록하세요
export const collections = { content };
