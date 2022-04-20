/**
 * @swagger
 * /users:
 *      get:
 *          summary: 개인정보 가져오기
 *          tags: [users]
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
 *                                  email:
 *	                                    type: string
 *	                                    example: aaa@gmail.com
 *                                  name:
 *	                                    type: string
 *	                                    example: 짱구
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01011112222
 *                                  personal:
 *	                                    type: string
 *	                                    example: 220110-2222222
 *                                  prefer:
 *	                                    type: string
 *	                                    example: https://naver.com
 *  
 */
