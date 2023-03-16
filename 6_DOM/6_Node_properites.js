
//  Node properties

/**
 * ElementNode
 * -- attributes:
 * -- autocapitalize: tự động viết hoa
 * -- autofocus: nháy con trỏ chuột trong input
 * -- baseURI: trả về URI hiện tại
 * -- childElementCount: đếm phần tử con là element (chỉ tính element node)
 * -- childNodes: những node con(bao gồm cả text node và element node)
 * -- children: trả về HTML colection chứa các element node
 * -- classList: quản lý attributes class của element
 * -- contentEditable: chỉ định nội dung của phần tử có thể chỉnh sửa hay không
 * -- draggable: kéo thả
 * -- firstChild: lấy ra node đầu tiên 
 * -- firstElementChild: lấy ra element đầu tiên
 * -- lastChild: lấy ra node cuối cùng
 * -- localName: "div"
 * -- namespaceURI:
 * -- nextElementSIbling: trả về element tiếp theo
 * -- nextSibling: trả về node tiếp theo
 * -- nodeType: 
 * -- ownerDocument: tài liệu sở hữu
 * -- parentElement: element cha -> body
 * -- spellcheck: check chính tả
 * -- tabIndex: nút tab
 * -- title: title attribute
 * 
 */

var boxElement = document.querySelector('.box');

console.log([boxElement]);