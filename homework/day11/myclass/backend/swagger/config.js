export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: '다하지 못한 프로젝트',
      version: '1.0.0',
    },
  },
  apis: ['./swagger/*.js'], // files containing annotations as above
};