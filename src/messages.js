/**
 * Default error messages.
 *
 * @private
 */

const Messages = {
  // Type message
  type(prop, ctx, type) {
    if (typeof type == 'function') {
      type = type.name;
    }

    return `${prop} 必须是 ${type} 类型。`;
  },

  // Required message
  required(prop) {
    return `${prop} 是必填的。`;
  },

  // Match message
  match(prop, ctx, regexp) {
    return `${prop} 必须匹配 ${regexp} 。`;
  },

  // Length message
  length(prop, ctx, len) {
    if (typeof len == 'number') {
      return `${prop} 长度必须是 ${len} 。`;
    }

    const {min, max} = len;

    if (min && max) {
      return `${prop} 长度必须介于 ${min} 和 ${max} 之间。`;
    }
    if (max) {
      return `${prop} 的长度必须小于 ${max} 。`;
    }
    if (min) {
      return `${prop} 的长度必须大于 ${min} 。`;
    }
  },

  // Size message
  size(prop, ctx, size) {
    if (typeof size == 'number') {
      return `${prop} 必须为 ${size} 。`;
    }

    const {min, max} = size;

    if (min !== undefined && max !== undefined) {
      return `${prop} 必须介于 ${min} 和 ${max} 之间。`;
    }
    if (max !== undefined) {
      return `${prop} 必须小于 ${max} 。`;
    }
    if (min !== undefined) {
      return `${prop} 必须大于 ${min} 。`;
    }
  },

  // Enum message
  enum(prop, ctx, enums) {
    const copy = enums.slice();
    const last = copy.pop();
    return `${prop} 必须是 ${copy.join(', ')} 或 ${last}.`;
  },

  // Default message
  default(prop) {
    return `${prop} 不能通过验证。`;
  }
};

export default Messages;
