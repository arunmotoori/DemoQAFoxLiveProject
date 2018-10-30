$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FeatureFiles/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality scenarios",
  "description": "",
  "id": "login-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8223038929,
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
  "duration": 4295449130,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2399684116,
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
  "duration": 1559717629,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_that_the_User_is_able_to_login_successfully()"
});
formatter.result({
  "duration": 83885640,
  "status": "passed"
});
formatter.after({
  "duration": 941991112,
  "status": "passed"
});
formatter.before({
  "duration": 3924273884,
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
  "duration": 4172563159,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2149505803,
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
  "duration": 1312169546,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentails_are_invalid()"
});
formatter.result({
  "duration": 81709641,
  "status": "passed"
});
formatter.after({
  "duration": 893477252,
  "status": "passed"
});
formatter.before({
  "duration": 3842613706,
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
  "duration": 3983565791,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 2342056585,
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
  "duration": 1055168346,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_an_error_message_that_the_credentails_are_invalid()"
});
formatter.result({
  "duration": 70163972,
  "status": "passed"
});
formatter.after({
  "duration": 885429115,
  "status": "passed"
});
formatter.before({
  "duration": 3924452479,
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
  "duration": 3901950168,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_navigate_to_Account_Login_page()"
});
formatter.result({
  "duration": 1842128891,
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
  "duration": 2131856539,
  "status": "passed"
});
formatter.match({
  "location": "Login.i_should_see_a_message_informing_the_User_that_information_related_to_restting_password_have_been_sent_to_email_address()"
});
formatter.result({
  "duration": 76804110,
  "status": "passed"
});
formatter.after({
  "duration": 899802110,
  "status": "passed"
});
formatter.uri("FeatureFiles/Orders.feature");
formatter.feature({
  "line": 1,
  "name": "End to End scenarios for placing orders",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3909146860,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to place orders",
  "description": "",
  "id": "end-to-end-scenarios-for-placing-orders;verify-whether-the-user-is-able-to-place-orders",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Orders"
    },
    {
      "line": 3,
      "name": "@One"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I login to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I add a product to bag and checkout",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I place an order",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should see that the order is placed successfuly",
  "keyword": "Then "
});
formatter.match({
  "location": "Orders.i_login_to_the_application()"
});
formatter.result({
  "duration": 7338894722,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_add_a_product_to_bag_and_checkout()"
});
formatter.result({
  "duration": 7146012802,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_place_an_order()"
});
formatter.result({
  "duration": 5685251199,
  "status": "passed"
});
formatter.match({
  "location": "Orders.i_should_see_that_the_order_is_placed_successfuly()"
});
formatter.result({
  "duration": 884761174,
  "status": "passed"
});
formatter.after({
  "duration": 881493589,
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
  "duration": 3761584843,
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
  "duration": 6125204696,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 3711162311,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 1166742372,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 141638528,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 1076176948,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 86032943,
  "status": "passed"
});
formatter.after({
  "duration": 856721639,
  "status": "passed"
});
formatter.before({
  "duration": 3775583278,
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
  "duration": 4489212702,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 5145364118,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 751235728,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_Account_is_not_created()"
});
formatter.result({
  "duration": 87914050,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_the_error_messages_informing_the_User_to_fill_the_mandatory_fields()"
});
formatter.result({
  "duration": 238347193,
  "status": "passed"
});
formatter.after({
  "duration": 909099662,
  "status": "passed"
});
formatter.before({
  "duration": 3889883437,
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
  "duration": 3906327463,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 5527957790,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_all_the_below_valid_details(DataTable)"
});
formatter.result({
  "duration": 961791833,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 115119510,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_subscribe_to_Newsletter()"
});
formatter.result({
  "duration": 162528191,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 953784097,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_account_has_successfully_created()"
});
formatter.result({
  "duration": 77685007,
  "status": "passed"
});
formatter.after({
  "duration": 949119840,
  "status": "passed"
});
formatter.before({
  "duration": 3929273433,
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
  "duration": 3767348238,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_navigate_to_Account_Registration_page()"
});
formatter.result({
  "duration": 6414696733,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_provide_the_below_duplicate_details(DataTable)"
});
formatter.result({
  "duration": 877943573,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_select_the_Privacy_Policy()"
});
formatter.result({
  "duration": 130528209,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_click_on_Continue_Button()"
});
formatter.result({
  "duration": 877361721,
  "status": "passed"
});
formatter.match({
  "location": "Register.i_should_see_that_the_User_is_restriced_from_creating_dupblicate_account()"
});
formatter.result({
  "duration": 55205350,
  "status": "passed"
});
formatter.after({
  "duration": 875798537,
  "status": "passed"
});
formatter.uri("FeatureFiles/Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality scenarios",
  "description": "",
  "id": "search-functionality-scenarios",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3857507763,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify whether the User is able to search for the products",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-able-to-search-for-the-products",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Search"
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
  "name": "I search for a product \"Samsung SyncMaster 941BW\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see the product in the search results",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4243760570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Samsung SyncMaster 941BW",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 2276075454,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_should_see_the_product_in_the_search_results()"
});
formatter.result({
  "duration": 121921253,
  "status": "passed"
});
formatter.after({
  "duration": 859349979,
  "status": "passed"
});
formatter.before({
  "duration": 3857394488,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify whether the User is informed when the product being searched is not available",
  "description": "",
  "id": "search-functionality-scenarios;verify-whether-the-user-is-informed-when-the-product-being-searched-is-not-available",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Search"
    },
    {
      "line": 9,
      "name": "@Two"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I search for a product \"Apple iPhone\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see a message informing \"Your shopping cart is empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_launch_the_application()"
});
formatter.result({
  "duration": 4740629103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apple iPhone",
      "offset": 24
    }
  ],
  "location": "Search.i_search_for_a_product(String)"
});
formatter.result({
  "duration": 1653905565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty!",
      "offset": 34
    }
  ],
  "location": "Search.i_should_see_a_message_informing(String)"
});
formatter.result({
  "duration": 71916325,
  "status": "passed"
});
formatter.after({
  "duration": 854495799,
  "status": "passed"
});
});