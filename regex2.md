/* 
düzenli ifadeler, search, replace, test, exec .

Metin veri türü içerisinde arama yapmak için düzenli ifadeler kullanılır.

JavaScript regex kullanımı
/ifade/nitelik;
var aranan = /bilal/i;

/bilal/i düzenli bir ifadedir.

bilal aranacak kelimedir.

i küçük büyük harfe duyarsız arama yapılacağını ifade eder.

Metin içinde arama yapmak için search fonksiyonu kullanılır.
Metin içindeki değeri başka bir değer ile değiştirmek için replace fonksiyonu kullanılır.

--------search

Örnekte düzenli ifade bilal kelimesini küçük büyük harfe duyarsız olarak arar.

<script>
  var metin = "Merhaba ben bilal";
  var sonuc = metin.search(/bilal/i);
  alert(sonuc);

</script>

---------replace

Örnekte düzenli ifade bilal kelimesini küçük büyük harfe duyarsız olarak Sefa kelimesi ile değiştirir.

<script>
  var metin = "Merhaba ben bilal";
  var sonuc = metin.search(/bilal/i, "mustafa");
  alert(sonuc);
</script>


Düzenli ifade nitelikleri arama kriterini küçük büyük harfe duyarsız olarak yapmak için kullanılır.

Nitelik	Açıklama

i	Küçük büyük harf duyarsız arama yapar.
g	Metin veri türü içerisinde aranan tüm kelimeler üzerinde işlem yapar.
m	Çok satırlı arama yapar.

JavaScript düzenli ifade desenleri
Köşeli parantez içerisinde desenler kullanarak belirli karakter araması yapılır.

Desen	Açıklama

[abc]	Köşeli parantezler arasındaki karakterlerden herhangi birini bul
[0-9]	Parantezler arasındaki herhangi bir rakamı bul
(x|y)	Ayraç ile ayrılmış seçeneklerden herhangi birini bul

Meta karakterler özel bir anlam taşıyan karakterlerdir.

Meta karakter	Açıklama
\d	Sayıları bul
\s	Boşluk karakterini bul
\b	Kelimenin başında veya sonunda bul
\uxxxx	Onaltılık sayı xxxx ile belirtilen Unicode karakterini bul
Niceleyiciler arama niceliğini belirtir.

Nicelik	Açıklama
n+	En az bir n içeren herhangi bir kelime bul.
n*	Sıfır veya daha fazla n içeren herhangi bir kelime bul.
n?	Sıfır veya bir kez n‘yi içeren herhangi bir kelime bul.


----------test fonksiyonu düzenli ifade ile arama yapar.

<script>
  var ifade = /bilal/i
  var sonuc = ifade.test("Merhaba ben bilal");
  alert(sonuc);
</script>
Aranan ifade varsa true yoksa false değerini verir.

<script>
  var sonuc = (/bilal/i).test("Merhaba ben bilal");
  alert(sonuc);
</script>

------------- exec
JavaScript exec fonksiyonu düzenli ifade ile arama yapar.

<script>
  var ifade = /bilal/i
  var sonuc = ifade.exec("Merhaba ben bilal");
  alert(sonuc);
</script>
Aranan ifade varsa bulunan kelimeyi yoksa null değerini verir.

<script>
  var sonuc = (/bilal/i).exec("Merhaba ben bilal");
  alert(sonuc);
</script>
Örnekte aranan ifade bulunamadığı için null değerini verecektir.

<script>
  var ifade = /mustafa/i
  var sonuc = ifade.exec("Merhaba ben bilal");
  alert(sonuc);
</script>

*/