const El = ({ element, child, eventListener, restAttrs = {}, ...rest }) => {
  const elem = document.createElement(element);
  for (const key in rest) {
    elem[key] = rest[key];
  }
  Array.isArray(child) ? elem.append(...child) : elem.append(child);
  for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key]);
  }
  if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
  }
  return elem;
};

export default El;
