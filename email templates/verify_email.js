const verifyEmail = (otp) => `
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>New Template</title>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"> <!--<![endif]-->
    <style type="text/css">
        .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
        }

        .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
        }

        .rollover span {
            font-size: 0px;
        }

        u+.body img~div div {
            display: none;
        }

        #outlook a {
            padding: 0;
        }

        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
        }

        a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
        }

        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
        }

        .es-button-border:hover>a.es-button {
            color: #33A3AA !important;
        }

        @media only screen and (max-width:600px) {
            .es-m-p0r {
                padding-right: 0px !important
            }

            .es-m-p20b {
                padding-bottom: 20px !important
            }

            .es-m-p0l {
                padding-left: 0px !important
            }

            *[class="gmail-fix"] {
                display: none !important
            }

            p,
            a {
                line-height: 150% !important
            }

            h1,
            h1 a {
                line-height: 120% !important
            }

            h2,
            h2 a {
                line-height: 120% !important
            }

            h3,
            h3 a {
                line-height: 120% !important
            }

            h4,
            h4 a {
                line-height: 120% !important
            }

            h5,
            h5 a {
                line-height: 120% !important
            }

            h6,
            h6 a {
                line-height: 120% !important
            }

            h1 {
                font-size: 30px !important;
                text-align: left
            }

            h2 {
                font-size: 24px !important;
                text-align: left
            }

            h3 {
                font-size: 20px !important;
                text-align: left
            }

            h4 {
                font-size: 24px !important;
                text-align: left
            }

            h5 {
                font-size: 20px !important;
                text-align: left
            }

            h6 {
                font-size: 16px !important;
                text-align: left
            }

            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
                font-size: 30px !important
            }

            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
                font-size: 24px !important
            }

            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
                font-size: 20px !important
            }

            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
                font-size: 24px !important
            }

            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
                font-size: 20px !important
            }

            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
                font-size: 16px !important
            }

            .es-menu td a {
                font-size: 12px !important
            }

            .es-header-body p,
            .es-header-body a {
                font-size: 12px !important
            }

            .es-content-body p,
            .es-content-body a {
                font-size: 14px !important
            }

            .es-footer-body p,
            .es-footer-body a {
                font-size: 12px !important
            }

            .es-infoblock p,
            .es-infoblock a {
                font-size: 12px !important
            }

            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
                text-align: center !important
            }

            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
                text-align: right !important
            }

            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
                text-align: justify !important
            }

            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
                text-align: left !important
            }

            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
                display: inline !important
            }

            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
                display: inline !important
            }

            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
                line-height: 0 !important;
                font-size: 0 !important
            }

            .es-spacer {
                display: inline-table
            }

            a.es-button,
            button.es-button {
                font-size: 18px !important;
                line-height: 120% !important
            }

            a.es-button,
            button.es-button,
            .es-button-border {
                display: inline-block !important
            }

            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
                display: block !important
            }

            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
                display: inline-block !important
            }

            .es-adaptive table,
            .es-left,
            .es-right {
                width: 100% !important
            }

            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
                width: 100% !important;
                max-width: 600px !important
            }

            .adapt-img {
                width: 100% !important;
                height: auto !important
            }

            .es-mobile-hidden,
            .es-hidden {
                display: none !important
            }

            .es-desk-hidden {
                width: auto !important;
                overflow: visible !important;
                float: none !important;
                max-height: inherit !important;
                line-height: inherit !important
            }

            tr.es-desk-hidden {
                display: table-row !important
            }

            table.es-desk-hidden {
                display: table !important
            }

            td.es-desk-menu-hidden {
                display: table-cell !important
            }

            .es-menu td {
                width: 1% !important
            }

            table.es-table-not-adapt,
            .esd-block-html table {
                width: auto !important
            }

            .es-social td {
                padding-bottom: 10px
            }

            .h-auto {
                height: auto !important
            }
        }

        @media screen and (max-width:384px) {
            .mail-message-content {
                width: 414px !important
            }
        }
    </style>
</head>

<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
    <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#E0E1E5">
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" role="none"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#E0E1E5">
            <tr>
                <td valign="top" style="padding:0;Margin:0">
                    <table class="es-header" cellspacing="0" cellpadding="0" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                                    align="center" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-top:25px;padding-right:20px;padding-bottom:25px;padding-left:20px">
                                            <table class="es-left" cellspacing="0" cellpadding="0" align="left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td class="es-m-p0r es-m-p20b" valign="top" align="center"
                                                        style="padding:0;Margin:0;width:180px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-top:5px;font-size:0px">
                                                                    <a target="_blank" href="https://urbanfits.ae"
                                                                        style="mso-line-height-rule:exactly;text-decoration:underline;color:#999999;font-size:12px">
                                                                        <img src="https://urban-fits.s3.ap-south-1.amazonaws.com/website-copyrights/logo_pink.png"
                                                                            alt="Logo"
                                                                            width="50"
                                                                            style="display:block;outline:none;text-decoration:none"
                                                                            title="Logo">
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                                            <table class="es-right" cellspacing="0" cellpadding="0" align="right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:360px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td style="padding:0;Margin:0">
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr class="links">
                                                                            <td align="center" valign="top" width="33%"
                                                                                id="esd-menu-id-0"
                                                                                style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:10px;padding-left:5px">
                                                                                <a target="_blank"
                                                                                    href="https://urbanfits.ae"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;font-family:'Josefin Sans', helvetica, arial, sans-serif;display:block;color:#999999;font-size:12px">HOMEPAGE</a>
                                                                            </td>
                                                                            <td align="center" valign="top" width="33%"
                                                                                id="esd-menu-id-1"
                                                                                style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:10px;padding-left:5px">
                                                                                <a target="_blank"
                                                                                    href="https://urbanfits.ae/earn-ufpoints"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;font-family:'Josefin Sans', helvetica, arial, sans-serif;display:block;color:#999999;font-size:12px">EARN
                                                                                    UF-POINTS</a>
                                                                            </td>
                                                                            <td align="center" valign="top" width="33%"
                                                                                id="esd-menu-id-2"
                                                                                style="Margin:0;border:0;padding-top:15px;padding-right:5px;padding-bottom:10px;padding-left:5px">
                                                                                <a target="_blank"
                                                                                    href="https://urbanfits.ae/products/category/all-categories"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;font-family:'Josefin Sans', helvetica, arial, sans-serif;display:block;color:#999999;font-size:12px">ALL
                                                                                    CATEGORIES</a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                                    align="center" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left" style="padding:0;Margin:0;padding-top:30px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:600px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <!-- Heading texts -->
                                                                <td align="center" class="es-m-txt-c"
                                                                    style="padding:0;Margin:0;padding-right:20px;padding-left:20px;padding-bottom:10px">
                                                                    <h1
                                                                        style="Margin:0;font-family:'Josefin Sans', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:40px;font-style:normal;font-weight:normal;line-height:60px;color:#333333">
                                                                        WLECOME</h1>
                                                                    <h1
                                                                        style="Margin:0;font-family:'Josefin Sans', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:40px;font-style:normal;font-weight:normal;line-height:60px;color:#333333">
                                                                        TO THE URBANFITS</h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:10px;padding-bottom:30px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <!-- The messaage paragraph -->
                                                                <td align="center" class="es-m-p0r es-m-p0l es-m-txt-l"
                                                                    style="padding:0;Margin:0;padding-right:35px;padding-bottom:20px;padding-left:35px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px">
                                                                        Thanks for being a part of us, We're delighted
                                                                        to have you on board. You're now just one step
                                                                        away to shop with Urban Fits with personalized
                                                                        experience.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            bgcolor="#f6efe2"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#f2d7d4;border-radius: 6px;"
                                                            role="presentation">
                                                            <tr>
                                                                <td align="left" style="padding:20px;Margin:0">
                                                                    <h3
                                                                        style="Margin:0;font-family:'Josefin Sans', helvetica, arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:normal;line-height:30px;color:#333333">
                                                                        Here is your OTP: <b
                                                                            style="color: #FF4A60; font-family: Arial, Helvetica, sans-serif;">${otp}</b>
                                                                        <br>
                                                                        Expires in <b>5 minutes</b>
                                                                    </h3>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:10px;padding-bottom:30px">
                                            <table cellpadding="0" cellspacing="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="center" valign="top"
                                                        style="padding:0;Margin:0;width:560px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <!-- The messaage paragraph -->
                                                                <td align="center" class="es-m-p0r es-m-p0l es-m-txt-l"
                                                                    style="padding:0;Margin:0;padding-right:35px;padding-bottom:20px;padding-left:35px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:24px;letter-spacing:0;color:#333333;font-size:16px">
                                                                        If you didn't request this email by any means
                                                                        then please ignore it.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table cellpadding="0" cellspacing="0" class="es-content" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0"
                                    cellspacing="0" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:40px">
                                            <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td class="es-m-p0r es-m-p20b" align="center"
                                                        style="padding:0;Margin:0;width:174px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#e0efea;border-radius: 6px;"
                                                            bgcolor="#e0efea" role="presentation">
                                                            <tr>
                                                                <td style="padding:0;Margin:0">
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr class="links-images-left">
                                                                            <td align="left" valign="top" width="100%"
                                                                                style="Margin:0;border:0;padding-top:15px;padding-bottom:10px;padding-right:10px;padding-left:10px"
                                                                                id="esd-menu-id-0"><span
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;font-family:'Josefin Sans', helvetica, arial, sans-serif;display:block;color:#292f56;font-size:18px"><img
                                                                                        src="https://ehzzunr.stripocdn.email/content/guids/CABINET_d7c5399fd765711e7c7ab44c4e3e3f93cfdce9fe3f643ea9a96f4967cc6a4073/images/shirt_1.png"
                                                                                        alt="Uniqueness"
                                                                                        title="Uniqueness"
                                                                                        align="absmiddle"
                                                                                        class="b_title" width="24"
                                                                                        height="24"
                                                                                        style="display:inline !important;font-size:14px;border:0;outline:none;text-decoration:none;vertical-align:middle;padding-right:5px">Uniqueness</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="Margin:0;padding-right:10px;padding-left:10px;padding-top:15px;padding-bottom:15px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#999999;font-size:12px">
                                                                        Urban Fits brings you unique, stylish fashion
                                                                        that feels tailor-made for you.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                                                </tr>
                                            </table> <!--[if mso]></td><td style="width:173px" valign="top"><![endif]-->
                                            <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                                                <tr>
                                                    <td class="es-m-p0r es-m-p20b" align="center"
                                                        style="padding:0;Margin:0;width:173px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#f6efe2;border-radius: 6px;"
                                                            bgcolor="#f2d7d4" role="presentation">
                                                            <tr>
                                                                <td style="padding:0;Margin:0">
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr class="links-images-left">
                                                                            <td align="left" valign="top" width="100%"
                                                                                id="esd-menu-id-0"
                                                                                style="Margin:0;border:0;padding-top:15px;padding-bottom:10px;padding-right:10px;padding-left:10px">
                                                                                <span
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;font-family:'Josefin Sans', helvetica, arial, sans-serif;display:block;color:#292f56;font-size:18px"><img
                                                                                        src="https://ehzzunr.stripocdn.email/content/guids/CABINET_d7c5399fd765711e7c7ab44c4e3e3f93cfdce9fe3f643ea9a96f4967cc6a4073/images/deliverytruck_3.png"
                                                                                        alt="Delivery" title="Delivery"
                                                                                        align="absmiddle" width="24"
                                                                                        height="24"
                                                                                        style="display:inline !important;font-size:14px;border:0;outline:none;text-decoration:none;vertical-align:middle;padding-right:5px">Delivery</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="Margin:0;padding-right:10px;padding-left:10px;padding-top:15px;padding-bottom:15px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#999999;font-size:12px">
                                                                        Urban Fits delivers your favorite styles quickly
                                                                        and reliably to your door.</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                                                role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                                                <tr>
                                                    <td class="es-m-p0r" align="center"
                                                        style="padding:0;Margin:0;width:173px">
                                                        <table cellpadding="0" cellspacing="0" width="100%"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#e7e6e9;border-radius: 6px;"
                                                            bgcolor="#e7e6e9" role="presentation">
                                                            <tr>
                                                                <td style="padding:0;Margin:0">
                                                                    <table cellpadding="0" cellspacing="0" width="100%"
                                                                        class="es-menu" role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr class="links-images-left">
                                                                            <td align="left" valign="top" width="100%"
                                                                                id="esd-menu-id-0"
                                                                                style="Margin:0;border:0;padding-top:15px;padding-bottom:10px;padding-right:10px;padding-left:10px">
                                                                                <span
                                                                                    style="mso-line-height-rule:exactly;text-decoration:none;font-family:'Josefin Sans', helvetica, arial, sans-serif;display:block;color:#292f56;font-size:18px"><img
                                                                                        src="https://ehzzunr.stripocdn.email/content/guids/CABINET_d7c5399fd765711e7c7ab44c4e3e3f93cfdce9fe3f643ea9a96f4967cc6a4073/images/like_1.png"
                                                                                        alt="Quality" title="Quality"
                                                                                        align="absmiddle" width="24"
                                                                                        height="24"
                                                                                        style="display:inline !important;font-size:14px;border:0;outline:none;text-decoration:none;vertical-align:middle;padding-right:5px">Quality</span>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="left"
                                                                    style="Margin:0;padding-right:10px;padding-left:10px;padding-top:15px;padding-bottom:15px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:18px;letter-spacing:0;color:#999999;font-size:12px">
                                                                        Urban Fits offers high-quality fashion that you
                                                                        can trust. v</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table> <!--[if mso]></td></tr></table><![endif]-->
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                    <table class="es-footer" cellspacing="0" cellpadding="0" align="center" role="none"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
                        <tr>
                            <td align="center" style="padding:0;Margin:0">
                                <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                                    align="center" role="none"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px">
                                            <table cellspacing="0" cellpadding="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;font-size:0">
                                                                    <table cellpadding="0" cellspacing="0"
                                                                        class="es-table-not-adapt es-social"
                                                                        role="presentation"
                                                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                                        <tr>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0;padding-right:30px">
                                                                                <a target="_blank"
                                                                                    href="https://urbanfits.ae"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px">
                                                                                    <svg width="29" height="29"
                                                                                        viewBox="0 0 29 29" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <g
                                                                                            clip-path="url(#clip0_201_76099)">
                                                                                            <path
                                                                                                d="M14.5041 22.9219C16.6604 22.9219 18.5002 19.582 18.9807 18.7851C19.5783 17.8242 19.2971 16.8633 19.2971 16.2656C19.2971 15.8437 20.5393 14.9531 20.5393 13.9336C20.5393 12.9023 18.1369 12.082 18.1369 11.4961C18.1369 11.1211 18.4182 10.793 18.7229 10.793C19.2385 10.793 20.5041 12.4219 21.219 12.4219C21.6877 12.4219 21.7229 12.0117 21.9807 12.0117C22.5783 12.0117 22.6721 15.375 24.5119 16.1719C25.0158 15.5859 25.3205 14.918 25.3205 14.0273C25.3205 7.92188 20.2463 2.70703 14.0002 2.71875C10.5198 2.73047 9.23072 4.06641 9.23072 5.23828C9.23072 6.77344 7.97681 7.125 7.97681 8.05078C7.97681 8.63672 8.38696 9.02344 9.01978 9.02344C10.3791 9.02344 10.3674 7.54688 11.0588 7.54688C11.5745 7.5586 12.0549 8.33203 12.9104 8.33203C13.2971 8.33203 13.4846 8.08594 13.508 7.73438C13.5315 7.58203 13.6018 7.51172 13.7424 7.51172C14.4924 7.51172 15.3244 8.35547 15.3244 8.8711C15.3244 9.36328 15.1369 9.73828 14.8322 9.73828C14.3049 9.73828 12.9924 9.11719 11.8206 9.11719C9.19556 9.11719 7.00415 10.9805 7.00415 13.207C7.00415 15.1406 8.14087 16.2656 10.1331 16.2656C11.3401 16.2656 12.2307 17.0859 12.2307 18.1992C12.2307 19.9336 12.0432 22.9219 14.5041 22.9219ZM17.4572 6.96094C17.0236 6.96094 16.8479 7.1836 16.4729 7.1836C16.1096 7.1836 15.84 6.92578 15.84 6.5625C15.84 6 16.4026 5.6836 17.3635 5.6836C18.1838 5.6836 18.8049 6.10547 18.8049 6.65625C18.8049 6.96094 18.6057 7.20703 18.3479 7.20703C17.926 7.20703 17.7033 6.96094 17.4572 6.96094ZM14.0119 25.9804C20.551 25.9804 25.965 20.5547 25.965 14.0273C25.965 7.48828 20.5393 2.07422 14.0002 2.07422C7.4729 2.07422 2.05884 7.48828 2.05884 14.0273C2.05884 20.5547 7.48462 25.9804 14.0119 25.9804ZM14.0119 24.3867C8.35181 24.3867 3.65259 19.6875 3.65259 14.0273C3.65259 8.36719 8.34009 3.66797 14.0002 3.66797C19.6604 3.66797 24.3713 8.36719 24.3713 14.0273C24.3713 19.6875 19.6721 24.3867 14.0119 24.3867Z"
                                                                                                fill="black"
                                                                                                fill-opacity="0.85" />
                                                                                        </g>
                                                                                        <defs>
                                                                                            <clipPath
                                                                                                id="clip0_201_76099">
                                                                                                <rect width="23.9062"
                                                                                                    height="23.918"
                                                                                                    fill="white"
                                                                                                    transform="translate(2.05884 2.07422)" />
                                                                                            </clipPath>
                                                                                        </defs>
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0;padding-right:30px">
                                                                                <a target="_blank"
                                                                                    href="https://support@urbanfits.ae"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px">
                                                                                    <svg width="24" height="24"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M22 12V4.5H12H2V12V19.5H12"
                                                                                            stroke="#333333"
                                                                                            stroke-width="2"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round" />
                                                                                        <path d="M22 17H15"
                                                                                            stroke="#333333"
                                                                                            stroke-width="2"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round" />
                                                                                        <path
                                                                                            d="M17.5 14.5L15 17L17.5 19.5"
                                                                                            stroke="#333333"
                                                                                            stroke-width="2"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round" />
                                                                                        <path d="M2 4.5L12 12L22 4.5"
                                                                                            stroke="#333333"
                                                                                            stroke-width="2"
                                                                                            stroke-linecap="round"
                                                                                            stroke-linejoin="round" />
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                            <td align="center" valign="top"
                                                                                style="padding:0;Margin:0"><a
                                                                                    target="_blank"
                                                                                    href="https://instagram.com/urbanfitsae/"
                                                                                    style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px">
                                                                                    <svg width="27" height="27"
                                                                                        viewBox="0 0 24 24" fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg">
                                                                                        <path
                                                                                            d="M11.999 7.37701C10.7726 7.37701 9.59651 7.86418 8.72934 8.73135C7.86217 9.59852 7.375 10.7747 7.375 12.001C7.375 13.2274 7.86217 14.4035 8.72934 15.2707C9.59651 16.1378 10.7726 16.625 11.999 16.625C13.2254 16.625 14.4015 16.1378 15.2687 15.2707C16.1358 14.4035 16.623 13.2274 16.623 12.001C16.623 10.7747 16.1358 9.59852 15.2687 8.73135C14.4015 7.86418 13.2254 7.37701 11.999 7.37701ZM11.999 15.004C11.2023 15.004 10.4382 14.6875 9.87485 14.1242C9.31149 13.5608 8.995 12.7967 8.995 12C8.995 11.2033 9.31149 10.4392 9.87485 9.87587C10.4382 9.31251 11.2023 8.99601 11.999 8.99601C12.7957 8.99601 13.5598 9.31251 14.1231 9.87587C14.6865 10.4392 15.003 11.2033 15.003 12C15.003 12.7967 14.6865 13.5608 14.1231 14.1242C13.5598 14.6875 12.7957 15.004 11.999 15.004Z"
                                                                                            fill="black" />
                                                                                        <path
                                                                                            d="M16.806 8.28503C17.4014 8.28503 17.884 7.80239 17.884 7.20703C17.884 6.61166 17.4014 6.12903 16.806 6.12903C16.2107 6.12903 15.728 6.61166 15.728 7.20703C15.728 7.80239 16.2107 8.28503 16.806 8.28503Z"
                                                                                            fill="black" />
                                                                                        <path
                                                                                            d="M20.533 6.111C20.3015 5.51319 19.9477 4.97029 19.4943 4.51706C19.0409 4.06384 18.4979 3.71028 17.9 3.479C17.2003 3.21636 16.4611 3.07435 15.714 3.059C14.751 3.017 14.446 3.005 12.004 3.005C9.56195 3.005 9.24895 3.005 8.29395 3.059C7.54734 3.07356 6.80871 3.21561 6.10995 3.479C5.51189 3.71001 4.96872 4.06348 4.51529 4.51673C4.06186 4.96999 3.70818 5.51303 3.47695 6.111C3.21426 6.81062 3.07257 7.54984 3.05795 8.297C3.01495 9.259 3.00195 9.564 3.00195 12.007C3.00195 14.449 3.00195 14.76 3.05795 15.717C3.07295 16.465 3.21395 17.203 3.47695 17.904C3.70883 18.5018 4.06285 19.0446 4.51639 19.4978C4.96993 19.951 5.51302 20.3046 6.11095 20.536C6.80839 20.8092 7.54732 20.9614 8.29595 20.986C9.25895 21.028 9.56395 21.041 12.006 21.041C14.448 21.041 14.761 21.041 15.716 20.986C16.4631 20.9708 17.2022 20.8291 17.902 20.567C18.4997 20.3352 19.0426 19.9813 19.4959 19.528C19.9493 19.0746 20.3031 18.5318 20.535 17.934C20.798 17.234 20.939 16.496 20.954 15.748C20.997 14.786 21.01 14.481 21.01 12.038C21.01 9.59501 21.01 9.285 20.954 8.328C20.9423 7.57028 20.7999 6.82025 20.533 6.111ZM19.315 15.643C19.3085 16.2193 19.2033 16.7902 19.004 17.331C18.8538 17.7199 18.6239 18.073 18.329 18.3677C18.0342 18.6624 17.6809 18.8921 17.292 19.042C16.7572 19.2405 16.1923 19.3456 15.622 19.353C14.672 19.397 14.404 19.408 11.968 19.408C9.52995 19.408 9.28095 19.408 8.31295 19.353C7.74288 19.346 7.17828 19.2408 6.64395 19.042C6.25364 18.893 5.89895 18.6637 5.60284 18.369C5.30673 18.0742 5.07579 17.7206 4.92495 17.331C4.7284 16.7961 4.62326 16.2318 4.61395 15.662C4.57095 14.712 4.56095 14.444 4.56095 12.008C4.56095 9.571 4.56095 9.322 4.61395 8.353C4.62042 7.77703 4.72561 7.20642 4.92495 6.666C5.22995 5.877 5.85495 5.256 6.64395 4.954C7.17854 4.75614 7.74298 4.65097 8.31295 4.643C9.26395 4.6 9.53095 4.588 11.968 4.588C14.405 4.588 14.655 4.588 15.622 4.643C16.1924 4.64987 16.7573 4.75508 17.292 4.954C17.6809 5.10428 18.0341 5.33421 18.3289 5.62903C18.6238 5.92386 18.8537 6.27708 19.004 6.666C19.2005 7.20095 19.3056 7.76516 19.315 8.335C19.358 9.28601 19.369 9.553 19.369 11.99C19.369 14.426 19.369 14.688 19.326 15.644H19.315V15.643Z"
                                                                                            fill="black" />
                                                                                    </svg>
                                                                                </a>
                                                                            </td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:20px;padding-top:20px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Where style meets confidence <br>
                                                                        Thank you for being part of the Urban Fits
                                                                        community. We can't wait to share our passion
                                                                        for fashion with you!</p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        <br>
                                                                    </p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        Copyright © 2024 Urban Fits Dubai, United Arab
                                                                        Emirates.<br><a href="https://urbanfits.ae"
                                                                            target="_blank"
                                                                            style="mso-line-height-rule:exactly;text-decoration:underline;color:#333333;font-size:14px">www.urbanfits.ae</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center"
                                                                    style="padding:0;Margin:0;padding-bottom:20px;padding-top:20px">
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        <a href="https://urbanfits.ae/earn-ufpoints"
                                                                            target="_blank"
                                                                            style="mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">Earn
                                                                            UF-Points</a>
                                                                        | <a href="https://urbanfits.ae/policies/privacypolicy"
                                                                            target="_blank"
                                                                            style="mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">PrivacyPolicy</a>
                                                                        | <a href="https://urbanfits.ae/faq"
                                                                            target="_blank"
                                                                            style="mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px">FAQ</a>
                                                                    </p>
                                                                    <p
                                                                        style="Margin:0;mso-line-height-rule:exactly;font-family:'Josefin Sans', helvetica, arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                                                                        <a href="https://news.roadscholar.org/pub/cc?_ri_=X0Gzc2X%3DYQpglLjHJlYQGjyzaTkzeeFi2zerC0zgzczbjNOIlzba9WoUJuvjFtXeuYYy3f5zazdi2zg7D5VXtpKX%3DWTAYSTR&_ei_=EiwPQ42l-mBFJGD0ZPxQdvn68KA-iSCh2BK3SAYDkUHLey5WJ4xQxYbniNWM-XMX2oA8J9_EzQnKMGgobFu5Qu9kNmqizscCVsPGGGCh1iI4XJfNeCDDrsxzYrvFNnE_suU4ZX97nWDWvL1rvGPy9q1xsHro2ZagujxkiUO4C-JjgShG3b8w."
                                                                            style="mso-line-height-rule:exactly;text-decoration:none;color:#333333;font-size:14px"></a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="left"
                                            style="Margin:0;padding-right:20px;padding-left:20px;padding-bottom:20px;padding-top:20px">
                                            <table cellspacing="0" cellpadding="0" width="100%" role="none"
                                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                <tr>
                                                    <td align="left" style="padding:0;Margin:0;width:560px">
                                                        <table width="100%" cellspacing="0" cellpadding="0"
                                                            role="presentation"
                                                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                                            <tr>
                                                                <td align="center" class="es-infoblock made_with"
                                                                    style="padding:0;Margin:0;font-size:0"><a
                                                                        target="_blank" href="https://urbanfits.ae"
                                                                        style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px"><img
                                                                            src="https://urban-fits.s3.ap-south-1.amazonaws.com/website-copyrights/logo_pink_outlined.png"
                                                                            alt="Urban Fits" width="80"
                                                                            style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>`
export default verifyEmail