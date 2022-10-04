/**
 * 受け取った JSON データを加工 (不要なデータを除去、ブロックの ID を作成)
 */
import { v4 as uuid } from "uuid"

export const cleanAndTransformBlocks = (blocksJSON) => {
  const blocks = JSON.parse(blocksJSON)

  const deleteKeys = [
    "attributesType",
    "blockType",
    "dynamicContent",
    "originalContent",
    "saveContent",
    "postId",
    "get_parent",
    "order",
  ]

  const removeUnusedDataAndAssignId = (b) => {
    b.forEach((block) => {
      block.id = uuid()
      deleteKeys.forEach((deleteKey) => {
        delete block[deleteKey]
      })
      // インナーブロックがあれば再起的に処理
      if (block.innerBlocks?.length) {
        removeUnusedDataAndAssignId(block.innerBlocks)
      } else {
        delete block.innerBlocks
      }
    })
  }

  removeUnusedDataAndAssignId(blocks)

  return blocks
}
