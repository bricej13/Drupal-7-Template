function getWidth() {
    var e = jQuery(window).width();
    return log(e), e
}

function activateMenus() {
    jQuery("#search-menu").delegate(".menu-button", "click", function (e) {
        e.stopPropagation(), e.preventDefault(), jQuery("body").toggleClass("sideNav")
    }), jQuery("nav li:has(.mega, .sub) > a").click(function (e) {
        e.preventDefault();
        var t = $(this).parent();
        return t.hasClass("hover") && clickOpened ? t.removeClass("hover") : (t.addClass("hover"), $("nav li").not(t).removeClass("hover"), clickOpened = !0), !1
    }), jQuery("nav li:has(.mega, .sub)").click(function (e) {
        e.stopPropagation()
    }), jQuery("nav.no-js").removeClass("no-js"), jQuery("nav li .sub").each(function () {
        var e = $(this),
            t = e.parent().position().left;
        t > e.parent().parent().outerWidth() - e.outerWidth() && e.css("right", 0)
    }), jQuery(window).resize(function () {
        $(window).width() > 768 && $("body").removeClass("sideNav")
    })
}

var hideSearch = function() {

	if (document.readyState == 'complete') {
    // Document is ready when CSE element is initialized.
    // Render an element with both search box and search results in div with id 'test'.
    jQuery("#basic-search").hide();
    google.search.cse.element.render(
        {
          div: "test",
          tag: 'search'
         });
  } else {
    // Document is not ready yet, when CSE element is initialized.
    google.setOnLoadCallback(function() {
       // Render an element with both search box and search results in div with id 'test'.
		google.search.cse.element.render(
            {	
              div: "test",
              tag: 'search'
            });
    }, true);
  }
}

window.__gcse = {
  parsetags: 'callback',
  callback: hideSearch
};
	
function loadSearch() {

	var cx = "009932716493032633443:hlqjz33kfkc",
		gcse = document.createElement("script");
	gcse.type = "text/javascript";
	gcse.async = true;
	gcse.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.google.com/cse/cse.js?cx=" + cx;
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(gcse, s);
}

function setupNavPosition() {}

function rollOver() {
    $(this).hasClass("hover") || (clickOpened = !1, $(this).addClass("hover"), $("nav li").not(this).removeClass("hover"), $(document).click(hideAllMenus))
}

function rollOut() {
    $(this).removeClass("hover")
}

function hideAllMenus() {
    $("nav li").removeClass("hover"), $(document).unbind("click")
}

function endsWith(e, t) {
    return -1 !== e.indexOf(t, e.length - t.length)
}! function (e) {
    "use strict";

    function t() {
        e(".dropdown-backdrop").remove(), e(r).each(function () {
            n(e(this)).removeClass("open")
        })
    }

    function n(t) {
        var n, r = t.attr("data-target");
        return r || (r = t.attr("href"), r = r && /#/.test(r) && r.replace(/.*(?=#[^\s]*$)/, "")), n = r && e(r), n && n.length || (n = t.parent()), n
    }
    var r = "[data-toggle=dropdown]",
        i = function (t) {
            var n = e(t).on("click.dropdown.data-api", this.toggle);
            e("html").on("click.dropdown.data-api", function () {
                n.parent().removeClass("open")
            })
        };
    i.prototype = {
        constructor: i,
        toggle: function () {
            var r, i, s = e(this);
            if (!s.is(".disabled, :disabled")) return r = n(s), i = r.hasClass("open"), t(), i || ("ontouchstart" in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", t), r.toggleClass("open")), s.focus(), !1
        },
        keydown: function (t) {
            var i, s, o, u, a;
            if (/(38|40|27)/.test(t.keyCode) && (i = e(this), t.preventDefault(), t.stopPropagation(), !i.is(".disabled, :disabled"))) {
                if (o = n(i), u = o.hasClass("open"), !u || u && 27 == t.keyCode) return 27 == t.which && o.find(r).focus(), i.click();
                s = e("[role=menu] li:not(.divider):visible a", o), s.length && (a = s.index(s.filter(":focus")), 38 == t.keyCode && a > 0 && a--, 40 == t.keyCode && a < s.length - 1 && a++, ~a || (a = 0), s.eq(a).focus())
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function (t) {
        return this.each(function () {
            var n = e(this),
                r = n.data("dropdown");
            r || n.data("dropdown", r = new i(this)), "string" == typeof t && r[t].call(n)
        })
    }, e.fn.dropdown.Constructor = i, e.fn.dropdown.noConflict = function () {
        return e.fn.dropdown = s, this
    }, e(document).on("click.dropdown.data-api", t).on("click.dropdown.data-api", ".dropdown form", function (e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", r, i.prototype.toggle).on("keydown.dropdown.data-api", r + ", [role=menu]", i.prototype.keydown)
}(window.jQuery), window.log = function () {
    log.history = log.history || [], log.history.push(arguments), this.console && console.log(Array.prototype.slice.call(arguments))
},
function (e) {
    var t = e.write;
    e.write = function (n) {
        log("document.write():", arguments), /docwriteregexwhitelist/.test(n) && t.apply(e, arguments)
    }
}(document), jQuery(function () {
    getWidth(), jQuery(window).resize(getWidth), loadSearch(), activateMenus()
})