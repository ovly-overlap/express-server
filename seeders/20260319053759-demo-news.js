export async function up(queryInterface, Sequelize) {
  await queryInterface.bulkInsert('news', [
    {
      article_title: '테스트 뉴스',
      article_source: '네이버',
      article_image_url: 'img.jpg',
      content: '내용입니다',
      click_count: 0,
      scrolled_at: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('news', null, {});
}