const strings = [
    100,
    "iSMael",
    55,
    45,
    "sANyiA",
    66,
    "JaMEs",
    "eLAmIn",
    23,
    "IsMael",
    67,
    19,
    "ElaMIN",
  ];

    function unmessyString(messyArray) {
        return messyArray
        .filter((item) => typeof item === "string")
        .map((item) => item.toUpperCase())
        .map((item) => item + "!");
  }
  console.log(unmessyString(strings));