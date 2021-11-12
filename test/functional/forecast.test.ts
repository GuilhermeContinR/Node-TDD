describe('Beach forecast function test', () => {
  it('return forecast in few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast');
    expect(status).toBe(200);
    expect(body).toEqual([{ cod: 1 }]);
  });
});
