import Handler from '../../core/Handler';
import getFullname from '../../utils/getFullname';
import systemStrings from '../../strings/system';

class Goodbye extends Handler {
  getEventTarget() {
    return ['left_chat_participant'];
  }

  async didReceiveEvent(bot, {chat: {id: chatId}, left_chat_member: leftMember}) {
    const {username} = leftMember;
    const {username: botname} = await bot.getMe();
    const message = botname === username
      ? systemStrings.hello
      : systemStrings.memberLeft(getFullname(leftMember));

    await bot.sendMessage(chatId, message);
  }
}

export {
  Goodbye as default,
};
