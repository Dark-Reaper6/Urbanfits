const countryCodes = [
    { name: "Afghanistan", code: "+93", country: "af", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/AF.webp" },
    { name: "Armenia", code: "+374", country: "am", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/AM.webp" },
    { name: "Azerbaijan", code: "+994", country: "az", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/AZ.webp" },
    { name: "Australia", code: "+61", country: "au", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/AU.webp" },
    { name: "Bahrain", code: "+973", country: "bh", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/BH.webp" },
    { name: "Bangladesh", code: "+880", country: "bd", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/BD.webp" },
    { name: "Bhutan", code: "+975", country: "bt", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/BT.webp" },
    { name: "Brunei", code: "+673", country: "bn", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/BN.webp" },
    { name: "Belize", code: "+501", country: "bz", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/BZ.webp" },
    { name: "Cambodia", code: "+855", country: "kh", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/KH.webp" },
    { name: "Canada", code: "+1", country: "ca", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/CA.webp" },
    { name: "Costa Rica", code: "+506", country: "cr", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/CR.webp" },
    { name: "Cuba", code: "+53", country: "cu", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/CU.webp" },
    { name: "China", code: "+86", country: "cn", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/CN.webp" },
    { name: "Cyprus", code: "+357", country: "cy", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/CY.webp" },
    { name: "El Salvador", code: "+503", country: "sv", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/SV.webp" },
    { name: "Georgia", code: "+995", country: "ge", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/GE.webp" },
    { name: "Guatemala", code: "+502", country: "gt", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/GT.webp" },
    { name: "Honduras", code: "+504", country: "hn", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/HN.webp" },
    { name: "India", code: "+91", country: "in", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/IN.webp" },
    { name: "Indonesia", code: "+62", country: "id", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/ID.webp" },
    { name: "Iran", code: "+98", country: "ir", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/IR.webp" },
    { name: "Iraq", code: "+964", country: "iq", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/IQ.webp" },
    { name: "Japan", code: "+81", country: "jp", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/JP.webp" },
    { name: "Jordan", code: "+962", country: "jo", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/JO.webp" },
    { name: "Kazakhstan", code: "+7", country: "kz", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/KZ.webp" },
    { name: "Kuwait", code: "+965", country: "kw", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/KW.webp" },
    { name: "Kyrgyzstan", code: "+996", country: "kg", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/KG.webp" },
    { name: "Laos", code: "+856", country: "la", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/LA.webp" },
    { name: "Lebanon", code: "+961", country: "lb", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/LB.webp" },
    { name: "Malaysia", code: "+60", country: "my", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/MY.webp" },
    { name: "Maldives", code: "+960", country: "mv", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/MV.webp" },
    { name: "Mongolia", code: "+976", country: "mn", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/MN.webp" },
    { name: "Mexico", code: "+52", country: "mx", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/MX.webp" },
    { name: "Myanmar", code: "+95", country: "mm", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/MM.webp" },
    { name: "Nepal", code: "+977", country: "np", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/NP.webp" },
    { name: "Nicaragua", code: "+505", country: "ni", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/NI.webp" },
    { name: "North Korea", code: "+850", country: "kp", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/KP.webp" },
    { name: "Oman", code: "+968", country: "om", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/OM.webp" },
    { name: "Pakistan", code: "+92", country: "pk", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/PK.webp" },
    { name: "Panama", code: "+507", country: "pa", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/PA.webp" },
    { name: "Philippines", code: "+63", country: "ph", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/PH.webp" },
    { name: "Palestine", code: "+970", country: "ps", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/PS.webp" },
    { name: "Qatar", code: "+974", country: "qa", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/QA.webp" },
    { name: "Russia", code: "+7", country: "ru", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/RU.webp" },
    { name: "Saudia Arabia", code: "+966", country: "sa", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/SA.webp" },
    { name: "Singapore", code: "+65", country: "sg", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/SG.webp" },
    { name: "South Korea", code: "+82", country: "kr", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/KR.webp" },
    { name: "Sri Lanka", code: "+94", country: "lk", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/LK.webp" },
    { name: "Syria", code: "+963", country: "sy", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/SY.webp" },
    { name: "Taiwan", code: "+886", country: "tw", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/TW.webp" },
    { name: "Tajikistan", code: "+992", country: "tj", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/TJ.webp" },
    { name: "Thailand", code: "+66", country: "th", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/TH.webp" },
    { name: "Timor-Leste", code: "+670", country: "tl", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/TL.webp" },
    { name: "Turkey", code: "+90", country: "tr", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/TR.webp" },
    { name: "Turkmenistan", code: "+993", country: "tm", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/TM.webp" },
    { name: "United Arab Emirates", code: "+971", country: "ae", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/AE.webp" },
    { name: "United Kingdom", code: "+44", country: "gb", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/GB.webp" },
    { name: "United States America", code: "+1", country: "us", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/US.webp" },
    { name: "Uzbekistan", code: "+998", country: "uz", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/UZ.webp" },
    { name: "Vietnam", code: "+84", country: "vn", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/VN.webp" },
    { name: "Yemen", code: "+967", country: "ye", src: process.env.NEXT_PUBLIC_BASE_IMG_URL + "/country-flags/YE.webp" }
]
export default countryCodes