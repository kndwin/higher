export const ConditionalWrapper = ({ condtion, wrapper, children }) =>
  condtion ? wrapper(children) : children;
