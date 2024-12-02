import * as Yup from "yup";

export const reservationValidationSchema = Yup.object().shape({
  reservationDate: Yup.date()
    .min(new Date(), "Rezervasyon tarihi geçmiş bir tarih olamaz.")
    .required("Rezervasyon tarihi gereklidir."),
  numberOfGuests: Yup.number()
    .min(1, "Misafir sayısı en az 1 olmalıdır.")
    .required("Misafir sayısı gereklidir."),
  userId: Yup.string().required("Kullanıcı ID gereklidir."),
  restaurantId: Yup.string().required("Restoran ID gereklidir."),
});
