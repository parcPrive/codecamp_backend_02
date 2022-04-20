/**
 * @swagger
 * /starbucks:
 *      get:
 *          summary: 카페메뉴 가져오기
 *          tags: [starbucks]
 *          parameters:
 *          responses:
 *              200:
 *                  description: 성공
 *                  content:
 *                      application/json:
 *                          schema:
 *                            type: array
 *                            items:
 *                              type: object
 *                              properties:
 *                                  name:
 *	                                    type: string
 *	                                    example: 아메리카노
 *                                  kcal:
 *	                                    type: int
 *	                                    example: 5
 */

