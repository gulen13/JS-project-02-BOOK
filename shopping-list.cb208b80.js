!function(){var n={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]")};function e(){n.menu.classList.toggle("is-open"),n.openMenuBtn.classList.toggle("is-hidden"),n.closeMenuBtn.classList.toggle("is-hidden")}n.openMenuBtn.addEventListener("click",e),n.closeMenuBtn.addEventListener("click",e);var s,i,t=document.querySelector(".shopping-list"),o=document.querySelector(".shopping-wrapper"),a="bookarray";JSON.parse(localStorage.getItem(a))&&JSON.parse(localStorage.getItem(a)).length>0?(o.hidden=!0,s=JSON.parse(localStorage.getItem(a)),i=s.map((function(n){return'\n      <li class="shopping-list--item" data-id="'.concat(n._id,'">\n        <div class="shopping-list--img-wrapper">\n          <img\n            class="shopping-list--img"\n            src="').concat(n.book_image,'"\n            alt=""\n          />\n          <p class="shopping-list--author__mobile">').concat(n.author,'</p>\n        </div>\n        <div class="shopping-list--info-wrapper">\n          <h2 class="shopping-list--title">').concat(n.title,'</h2>\n          <p class="shopping-list--category">\n          ').concat(n.list_name,'\n          </p>\n        </div>\n        <ul class="shopping-list--link-list">\n          <li>\n            <a href="').concat(n.buy_links.find((function(n){return"Amazon"===n.name})).url,';\n            })}">\n              <svg width="48" height="15">\n                <use href="./images/icons.svg#icon-amazon"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="').concat(n.buy_links.find((function(n){return"Apple Books"===n.name})).url,';\n            })}">\n              <svg width="28" height="27">\n                <use href="./images/icons.svg#icon-ibook"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="').concat(n.buy_links.find((function(n){return"Bookshop"===n.name})).url,';\n            })}">\n              <svg width="32" height="30">\n                <use href="./images/icons.svg#icon-book-shop"></use>\n              </svg>\n            </a>\n          </li>\n        </ul>\n        <p class="shopping-list--description">\n        ').concat(n.description?n.description:"N/A",'\n        </p>\n        <p class="shopping-list--author">').concat(n.author,'</p>\n        <button class="shopping-list--btn" type="button">\n          <svg class="shopping-list--btn__icon">\n            <use href="./images/icons.svg#icon-dump"></use>\n          </svg>\n        </button>\n      </li>\n      ')})).join(""),t.insertAdjacentHTML("beforeend",i)):o.hidden=!1}();
//# sourceMappingURL=shopping-list.cb208b80.js.map
