function readMore () {
  var inTabletView = window.innerWidth < 1020 && window.innerWidth > 740
  if (inTabletView) {
    var readMoreContainer = document.getElementsByClassName('read-more-container')
    if (readMoreContainer && readMoreContainer.length > 0) {
      for (var x = 0; x < readMoreContainer.length; x++) {
        var paragraghs = readMoreContainer[x].children
        var paragraphsHeight = 0
        for (var y = 0; y < paragraghs.length; y++) {
          var heightIncludesMargin = paragraghs[y].offsetHeight + 20
          paragraphsHeight += heightIncludesMargin
        }
        if (paragraphsHeight >= 300) {
          var parentDiv = readMoreContainer[x].parentElement
          parentDiv.classList.add('read')
        }
      }
    }
  }
}
// add readMore functionality to run on page resize and on page load
readMore()
window.addEventListener('resize', readMore)
//  start of onclick function attached to show more button
function showMore (button) {
  var parentElement = button.parentElement
  parentElement.classList.toggle('more')
  if (button.textContent === 'read more') {
    button.textContent = 'read less'
  } else {
    button.textContent = 'read more'
  }
}
