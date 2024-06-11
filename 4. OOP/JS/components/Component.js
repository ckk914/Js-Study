// DOM을 생성하는 공통 클래스
class Component {
  constructor(tagId) {
    this.tagId = tagId;
  }

  createElement(tagName = "", className = "", childHtml = "", attr = {}) {
    // 태그를 생성
    const $newTag = document.createElement(tagName);
    // 클래스를 부여
    if (className) $newTag.className = className;
    // 자식 태그를 붙이기
    if (childHtml) $newTag.innerHTML = childHtml;
    // 속성 부여하기
    for (const attrName in attr) {
      $newTag.setAttribute(attrName, attr[attrName]);
    }

    // 생성된 태그를 다른 부모태그에 추가하기
    document.getElementById(this.tagId).appendChild($newTag);
    return $newTag;
  }
}

export default Component;
