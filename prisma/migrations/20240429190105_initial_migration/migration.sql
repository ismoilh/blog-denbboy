-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "authors";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "categories";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "posts";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "tags";

-- CreateEnum
CREATE TYPE "posts"."PostStatus" AS ENUM ('ok', 'pending', 'deleted');

-- CreateTable
CREATE TABLE "posts"."posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "author_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "status" "posts"."PostStatus" NOT NULL DEFAULT 'ok',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories"."categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags"."tags" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "authors"."authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authors_email_key" ON "authors"."authors"("email");

-- AddForeignKey
ALTER TABLE "posts"."posts" ADD CONSTRAINT "posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "authors"."authors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts"."posts" ADD CONSTRAINT "posts_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"."categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
