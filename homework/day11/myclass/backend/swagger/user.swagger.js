/**
 * @openapi
 * /users:
 *      get:
 *          summary: 유저 목록보기
 *          tags: [users]
 *          parameters:
 *              - in: query
 *                name: number
 *                type: int
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
 *	                                    example: 철수
 *                                  email:
 *	                                    type: string
 *	                                    example: gusahr119@gmail.com
 *                                  phone:
 *	                                    type: string
 *	                                    example: 01097758809
 *                                  prefer:
 *	                                    type: string
 *	                                    example: www.naver.com
 *                                  og:
 *	                                    type: object
 *	                                    properties:
 *                                          title: 
 *                                              type: string
 *                                              example: 네이버
 *                                          url: 
 *                                              type: string
 *                                              example: //www.naver.com
 *                                          image: 
 *                                              type: string
 *                                              example: https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png
 */

/**
 * @swagger
 * /user:
 *  post:
 *      summary: 유저 추가하기
 *      tags: [User]
 *      requestBody:
 *               required: true
 *               content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  required: true
 *                                  example: 현목
 *                              personal:
 *                                  type: string
 *                                  required: true
 *                                  example : 999111-*******
 *                              email:
 *                                  type: string
 *                                  required: true
 *                                  example : gusahr119@gmail.com
 *                              phone:
 *                                  type: string
 *                                  required: true
 *                                  example : 01097758809
 *                              prefer:
 *                                  type: string
 *                                  required: true
 *                                  example : https://www.naver.com
 *                              pwd:
 *                                  type: string
 *                                  required: true
 *                                  example : 123123123
 *      responses:
 *          '200':
 *                  description: user의 _id 리턴
 *                  content:
 *                       application/json:
 *                          schema:
 *                            type: string
 *                            example: 61ee1b7272a81036fc429a05
 */