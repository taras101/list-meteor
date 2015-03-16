
var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfuly logged in
      console.log( "Successfully logged in");
    }
    if (state === "signUp") {
      // Successfully registered
     console.log( "Successfully registered");
    }
  }
};

AccountsTemplates.configure({
    // Behaviour
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,

    // Appearance
    showAddRemoveServices: true,
    showForgotPasswordLink: true,
    showLabels: false,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
});
AccountsTemplates.configureRoute('signIn', {
    name: 'signIn',
    template: 'signin',
});
AccountsTemplates.configureRoute('forgotPwd', {
    name: 'forgotPwd',
    template: 'fullPageAtForm',
});
AccountsTemplates.configureRoute('signUp', {
    name: 'signUp',
    template: 'fullPageAtForm',
});
