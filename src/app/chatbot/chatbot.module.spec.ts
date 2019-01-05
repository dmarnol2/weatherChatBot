import { ChatbotModule } from './chatbot.module';

describe('ChatbotModule', () => {
  let chatbotModule: ChatbotModule;

  beforeEach(() => {
    chatbotModule = new ChatbotModule();
  });

  it('should create an instance', () => {
    expect(chatbotModule).toBeTruthy();
  });
});
