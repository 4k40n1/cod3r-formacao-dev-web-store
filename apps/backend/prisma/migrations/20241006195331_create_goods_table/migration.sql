-- CreateTable
CREATE TABLE "goods" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "public_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "brand" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "picture" TEXT,
    "video_review" TEXT,
    "rate" REAL,
    "price" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "tag" (
    "goods_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "tag_goods_id_fkey" FOREIGN KEY ("goods_id") REFERENCES "goods" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "goods_public_id_key" ON "goods"("public_id");

-- CreateIndex
CREATE UNIQUE INDEX "tag_goods_id_name_key" ON "tag"("goods_id", "name");
