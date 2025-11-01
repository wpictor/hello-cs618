import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'

import dotenv from 'dotenv'
dotenv.config()

await initDatabase()

const post = new Post({
  title: 'New Post',
  author: 'John',
  contents: 'New post details',
  tags: ['mongoose', 'mongodb'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
