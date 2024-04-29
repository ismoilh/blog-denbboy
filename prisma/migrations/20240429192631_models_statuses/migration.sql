-- CreateEnum
CREATE TYPE "categories"."CategoryStatus" AS ENUM ('ok', 'pending', 'deleted');

-- CreateEnum
CREATE TYPE "tags"."TagStatus" AS ENUM ('ok', 'pending', 'deleted');

-- CreateEnum
CREATE TYPE "authors"."AuthorStatus" AS ENUM ('ok', 'pending', 'deleted');

-- AlterTable
ALTER TABLE "authors"."authors" ADD COLUMN     "status" "authors"."AuthorStatus" NOT NULL DEFAULT 'ok';

-- AlterTable
ALTER TABLE "categories"."categories" ADD COLUMN     "status" "categories"."CategoryStatus" NOT NULL DEFAULT 'ok';

-- AlterTable
ALTER TABLE "tags"."tags" ADD COLUMN     "status" "tags"."TagStatus" NOT NULL DEFAULT 'ok';
