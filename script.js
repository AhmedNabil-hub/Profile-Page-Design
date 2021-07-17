// Card Links changing active class

var cardTabs = document.getElementById('card-tabs').children;

for (tab of cardTabs) {
  tab.addEventListener('click', function () {
    if (![... this.classList].includes('active')) {
      this.classList.add('active');
      for (sib of getSiblings(this)) {
        sib.classList.remove('active');
      }
    }
  });
}

var mainTabs = document.getElementById('main-tabs').children;

for (tab of mainTabs) {
  tab.addEventListener('click', function () {
    if (![... this.classList].includes('active')) {
      this.classList.add('active');
      for (sib of getSiblings(this)) {
        sib.classList.remove('active');
      }
    }
  });
}


let getSiblings = function (e) {
  let siblings = []; 

  if(!e.parentNode) {
      return siblings;
  }
  
  let sibling  = e.parentNode.firstChild;

  while (sibling) {
      if (sibling.nodeType === 1 && sibling !== e) {
          siblings.push(sibling);
      }
      sibling = sibling.nextSibling;
  }

  return siblings;
};