//u ovoj funkciji zelimo jednostavno da radimo ono sto smo nekad radili u nasem reduceru.
//Dakle zelimo da vratimo updajtovani objekat

//Ovo sam primjenio na Deceremtu i na subu u reduceru: counter.js. Ostale sam ostavio namjerno
//da se vide oba nacina rada

export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject, //kreirali smo novi objekat sa svim propertijima od starog
    ...updatedValues, //updatedValues ce biti JS objekat sa svim vrijednostima koje zelimo da overwritamo
  };
};

export default updateObject;
