const { redirect } = require("express"); // Import redirect function from Express
const { validateToken } = require("../services/authentication");

function loginRequired(cookieName) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookieName];
    if (!tokenCookieValue) {
      return res.redirect("/login"); // Change redirect to res.redirect
    }
    try {
      const userPayload = validateToken(tokenCookieValue);
      req.user = userPayload;
      return next();
    } catch (error) {
      console.error(error);
      return res.redirect("/login"); // Change redirect to res.redirect
    }
  };
}

module.exports = {
  loginRequired,
};
