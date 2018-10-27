$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality scenarios",
  "description": "",
  "id": "login-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6067823272,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to login with valid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Login"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I login to the Application using Username \"ravi.kiran1@gmail.com\" and Password \"rkiran\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see that the User is able to login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4175658746,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 1954313895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran1@gmail.com",
      "offset": 43
    },
    {
      "val": "rkiran",
      "offset": 80
    }
  ],
  "location": "Login.i_login_to_the_Application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 1168195490,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 91284989,
  "status": "passed"
});
formatter.after({
  "duration": 832309712,
  "status": "passed"
});
formatter.before({
  "duration": 3755037868,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify whether the User is not able to login with invalid credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Login"
    },
    {
      "line": 10,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I login to the Application using Username \"ravi.kiran99@gmail.com\" and Password \"rkiran99\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see an error message that the credentails are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4032530069,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 1931155374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran99@gmail.com",
      "offset": 43
    },
    {
      "val": "rkiran99",
      "offset": 81
    }
  ],
  "location": "Login.i_login_to_the_Application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 899223770,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentails_are_invalid()"
});
formatter.result({
  "duration": 60084381,
  "status": "passed"
});
formatter.after({
  "duration": 831714646,
  "status": "passed"
});
formatter.before({
  "duration": 3703173413,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the User is not able to login without providing credentials",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-not-able-to-login-without-providing-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Login"
    },
    {
      "line": 17,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I login to the Application using Username \"\" and Password \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see an error message that the credentails are invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4036610204,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2196897271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "",
      "offset": 59
    }
  ],
  "location": "Login.i_login_to_the_Application_using_Username_and_Password(String,String)"
});
formatter.result({
  "duration": 787418037,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentails_are_invalid()"
});
formatter.result({
  "duration": 56444506,
  "status": "passed"
});
formatter.after({
  "duration": 821683465,
  "status": "passed"
});
formatter.before({
  "duration": 3702108258,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify whether the User is able to reset the forgotten password",
  "description": "",
  "id": "login-functionality-scenarios;verify-whether-the-user-is-able-to-reset-the-forgotten-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Login"
    },
    {
      "line": 24,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I navigate to Account Login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I reset the forgotten password for email \"ravi.kiran@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I should see a message informing the User that information related to restting password have been sent to email address",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4026919978,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2133396540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ravi.kiran@gmail.com",
      "offset": 42
    }
  ],
  "location": "Login.i_reset_the_forgotten_password_for_email(String)"
});
formatter.result({
  "duration": 1721603117,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_User_that_information_related_to_restting_password_have_been_sent_to_email_address()"
});
formatter.result({
  "duration": 60990953,
  "status": "passed"
});
formatter.after({
  "duration": 824752439,
  "status": "passed"
});
formatter.uri("FeatureFiles/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Registraion functionality scenarios",
  "description": "",
  "id": "registraion-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3839758243,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the user is able to register into the application by providing all the details",
  "description": "",
  "id": "registraion-functionality-scenarios;verify-whether-the-user-is-able-to-register-into-the-application-by-providing-all-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Register"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 8
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 9
    },
    {
      "cells": [
        "Email",
        "ravi.kiran2@gmail.com"
      ],
      "line": 10
    },
    {
      "cells": [
        "Telephone",
        "9121634812"
      ],
      "line": 11
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4008617142,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 3684468453,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 867706750,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 110147778,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 904517826,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 71569247,
  "status": "passed"
});
formatter.after({
  "duration": 857395027,
  "status": "passed"
});
formatter.before({
  "duration": 3677191345,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify whether the user is not allowed to register on skipping the mandatory fields",
  "description": "",
  "id": "registraion-functionality-scenarios;verify-whether-the-user-is-not-allowed-to-register-on-skipping-the-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@Register"
    },
    {
      "line": 17,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Continue Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I should see that the User Account is not created",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see the error messages informing the User to fill the mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4158356497,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 3772844940,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 632873214,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 74635201,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_User_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 233064949,
  "status": "passed"
});
formatter.after({
  "duration": 790333714,
  "status": "passed"
});
formatter.before({
  "duration": 3859633324,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify  whether the user is able to register into the application by opting for Newsletter subscription",
  "description": "",
  "id": "registraion-functionality-scenarios;verify--whether-the-user-is-able-to-register-into-the-application-by-opting-for-newsletter-subscription",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@Register"
    },
    {
      "line": 25,
      "name": "@Three"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I provide all the below valid details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 30
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 31
    },
    {
      "cells": [
        "Email",
        "ravi.kiran2@gmail.com"
      ],
      "line": 32
    },
    {
      "cells": [
        "Telephone",
        "9121634812"
      ],
      "line": 33
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 34
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I subscribe to Newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see that the User account has successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 3999643564,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 3477349325,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 880989276,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 111456472,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 129675485,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 862801979,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 80791650,
  "status": "passed"
});
formatter.after({
  "duration": 816211946,
  "status": "passed"
});
formatter.before({
  "duration": 3667400683,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify whether the user is restricted from creating a duplicate account",
  "description": "",
  "id": "registraion-functionality-scenarios;verify-whether-the-user-is-restricted-from-creating-a-duplicate-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Register"
    },
    {
      "line": 40,
      "name": "@Four"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I navigate to Account Registration page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I provide the below duplicate details",
  "rows": [
    {
      "cells": [
        "FirstName",
        "Ravi"
      ],
      "line": 45
    },
    {
      "cells": [
        "LastName",
        "Kiran"
      ],
      "line": 46
    },
    {
      "cells": [
        "Email",
        "ravi.kiran1@gmail.com"
      ],
      "line": 47
    },
    {
      "cells": [
        "Telephone",
        "9121634812"
      ],
      "line": 48
    },
    {
      "cells": [
        "Password",
        "rkiran"
      ],
      "line": 49
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select the Privacy Policy",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on Continue Button",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should see that the User is restriced from creating dupblicate account",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4081051803,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 3551498957,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details(DataTable)"
});
formatter.result({
  "duration": 829028161,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 130106304,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 734419708,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_is_restriced_from_creating_dupblicate_account()"
});
formatter.result({
  "duration": 50793636,
  "status": "passed"
});
formatter.after({
  "duration": 836074567,
  "status": "passed"
});
});