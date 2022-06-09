Neden Regex Öğrenmeliyiz?
DRY (don’t repeat yourself) prensibi ile geliştirme yaptığımız için,
Dosya isimlerinde toplu değişiklikler yapabilmek için,
Esnek ve karmaşık aramalar yapabilmek için,
Unix Shell ile etkileşime girebilmek için,
Favori metin editörünüzde kod aramak ve/veya yeniden düzenlemek için,
Veritabanında metin araması yapmak için,
Kullanıcı girişlerini doğrulamak (Input Validations) için,
Efektif Code Refactoring yapabilmek ve çok daha fazlası için regex öğrenmeliyiz…

Hızlı Başlangıç
Metacharacter
+ En az bir kez veya daha fazla tekrarlı kullanım

- Aralık belirtmede kullanılır

* Hiç olmayabilir veya birden fazla tekrarlı kullanım

[ Karakter kümesi açma

] Karakter kümesi kapama

{ Tekrar sayısı kümesi açma

} Tekrar sayısı kümesi kapama

^ Tersi, negatifi anlamındadır

\ Kaçış karakteri

? Opsiyonel (0 veya 1 kez tekrarlı) kullanım

. Boşluk olmayan tüm karakterler

$ Satır sonu

| veya

Yukarıdaki karakterler regex söz dizimi (syntax) içerisinde kullanılan özel karakterlerdir. Eğer bu karakterlerden birini kalıp içinde kullanmak istersek \ karakteri ile kaçış yapabiliriz. Evet, \ sembolünü kullanmak için de aynı sembol ile kaçış yapmanız gerekir: \\

Yazılmayan Karakterler
\n satır sonu (new line)

\r satır kesme (break)

\t sekme boşluk (tab)

\b kelime sınırı (word boundary)

Sabit değerli sorgular
Eğer karmaşık bir arama yapılmayacaksa, sorgulanacak harf, rakam yada kombinasyon direkt olarak yazılır. Regex genellikle sabit içerik eşleştirme için kullanılır.

Karakter Kümeleri
Karakter kümeleri bizim esnek arama yapmamızı sağlar. Örneğin bir içerikte bulunan tüm rakamları bulmak istiyoruz. Bunun için yapmamız gereken [0123456789] yazarak içerikteki rakamları aratabiliriz. Sadece rakamlar değil, harfleri (büyük küçük harf duyarlı olarak), özel karakterleri, kendi oluşturduğunuz bir kümeyi ya da bütün bunların dışında kalan tüm karakterleri karakter kümeleri ile esnek bir şekilde kolayca bulabilirsiniz.

[character_group ] character_group içindeki herhangi bir tek karakteri eşleştirir. Varsayılan olarak, eşleşme büyük / küçük harf duyarlıdır.

Örnek: [ae] Nevcan “e”, “a”

[^ character_group ] character_group içinde olmayan herhangi bir karakterle eşleşir. Varsayılan olarak, character_group içindeki karakterler büyük / küçük harf duyarlıdır.

Örnek: [^ae] Nevcan “N”, “v”, “c”, “n”

[first-last] Karakter aralığı: ASCII karakter tablosundaki iki karakter aralığındaki herhangi bir karakteri eşleştirir.

Örnek: [A-Z] Nevcan “N”

. Joker Karakter: \n dışında herhangi bir karakterle eşleşir. Karakter kümesi içinde kaçış karakteri ile kullanılmalıdır.

Örnek: c.n Nevcan “can”

\w Herhangi bir sözcük karakteriyle (word) eşleşir.

Örnek: [a-zA-Z0-9_]

\W Sözcük olmayan herhangi bir karakterle eşleşir.

\s Herhangi bir boşluk karakteriyle (white space) eşleşir.

\S Boşluk olmayan herhangi bir karakterle eşleşir.

\d Rakamlarla (digit) eşleşir.

Örnek: \d Nevcan87 “8”, “7”

\D Rakam olmayanlarla eşleşir.

Örnek: Nevcan87 “N”, “e”, “v”, “c”, “a”, “n”

Kısa Tanımlar

[0-9] yerine \d sayı karakter kümesini ifade eder.

[^0-9] yerine \D sayı olmayan karakter kümesini ifade eder.

[ \t\n\r\f\v] yerine \s boşlukları ifade eder, tam tersi için \S

\b kelime sınırı

[a-zA-Z0-9_] yerine \w rakam, küçük harf, büyük harf ve "_" karakterlerinin tümünü ifade eder

ASCII Karakter Tablosu ve Karakter Kümeleri Hakkında Bazı İpuçları
[a-z][A-Z][0-9] ya da kısaca [a-zA-Z0-9]

[a-Z] çalışmaz, çünkü ascii tablosunda Z karakteri a'dan önce gelir.

[A-z] çalışır, ancak arada başka karakterleri de kapsayacağı için tercih edilmez.

[ase?,] sadece bu 5 karakterden oluşan bir karakter kümesidir.

[ ] ^ \ kaçış karakteri olmadan karakter kümesine dahil edilemez. Çünkü [ ] zaten karakter kümesini ifade eder. ^ ise değildir (tersi) anlamına gelir.

Tekrar Sayısı
? opsiyonel (0 veya 1 kez) kullanım

+ en az bir kez veya daha fazla kullanım

* hiç olmayabilir veya birden fazla kullanım

Diğer dillerde PosiX mantığı ile [:digit:] tarzında tanımlamalar ile karşılaşabilirsiniz.

PosiX (Portable Operating System Interface for uniX)’in geliştirilmesinde iki temel amaç vardı. Bunlardan ilki, geliştiricilerin regex kullanmaya çalışmak için harcadıkları zamanı azaltmak; ikincisi ise, ait olmadığı durumlarda karmaşıklığı önlemektir.

Tekrar Kümesi
Süslü parantezleri kullanarak bir karakterin ya da bir karakter kümesinin ne kadar tekrar edeceğini belirtebilirsiniz.

a{2} örneğinde "a" karakterini 2 kez peş peşe aratacaktır. "Saat, maaş..." gibi kelimeler örnek olarak verilebilir. Eğer en az 2 en fazla 5 kez tekrar etmesini istiyorsanız o zaman tekrar kümesinde bu iki değeri "," ile ayırmanız gerekiyor. a{2,5} gibi... Eğer max ve min değerleri vermek istiyorsanız o zaman virgülün tek tarafını doldurmanız yeterli olacaktır.

{0,5} max 5'e kadar tekrar eder.

{5,} min 5 tekrardan sonsuza kadar devam eder.

Kullanışlı Regex Kalıpları
Düzenli ifadeler oluşturmak, test etmek ve hata ayıklamak için Regex101 isimli web uygulamasını şiddetle tavsiye ederim. Ben sıklıkla pratik yapmak ve yazdıklarımı kontrol etmek için kullanıyorum. Bu makalede bahsedeceğim ifadeleri test etmek için kullanmanızı tavsiye ederim.

regex101.com

Tarih Formatı (dd/mm/yyyy)
/^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/
24 Saatlik Zaman Formatı
/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/
Hex Renk Değeri
/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
Gelin bu Hex Renk kalıbını beraber inceleyelim;

/^ satır başını (/ javascript syntax'ına özel bir kullanım),

#? opsiyonel olarak '#' karakterini (olabilir de olmayabilirde),

[a-fA-F0-9]{6} ascii tablosunda a'dan f'ye kadar veya A'dan F'ye kadar veya 0'dan 9'a kadar olan karakterlerden peş peşe 6 tane olması gerektiğini,

| veya,

[a-fA-F0-9]{3} ascii tablosunda a'dan f'ye kadar veya A'dan F'ye kadar veya 0'dan 9'a kadar olan karakterlerden peş peşe 3 tane olması gerektiğini,

$/ satır sonunu ifade eder (/ javascript syntax'ına özel bir kullanım).

Örnek: #FF0000, 424242, #0a0, aCe (Yukarıdaki sorgu ile yandaki tüm değerleri kocaman bir stil dosyasında saniyeler içerisinde bulabiliriz)