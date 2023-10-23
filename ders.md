## **Docker Nedir?**

Docker, işletim sistemi düzeyinde sanallaştırma kullanarak yazılımları konteyner adı verilen paketler halinde sunan bir platform hizmeti setidir. Konteynerler birbirinden izole edilmiştir ve kendi yazılımlarını, kütüphanelerini ve yapılandırma dosyalarını paketler; iyi tanımlanmış kanallar aracılığıyla birbirleriyle iletişim kurabilirler. Tüm konteynerler tek bir işletim sistemi çekirdeği tarafından çalıştırılır ve bu nedenle sanal makinelerden daha hafiftir.

## **Konteyner Nedir?**

Docker Konteyner, belirli bir uygulamayı veya ortamı dağıtmak için uç uca oluşturulabilen standartlaştırılmış bir birimdir. Bir Ubuntu konteyneri, CentOs konteyneri vb. olabilir işletim sistemi açısından gereksinimi karşılamak için. Ayrıca, bir CakePHP konteyneri veya Tomcat-Ubuntu konteyneri gibi uygulamaya yönelik bir konteyner de olabilir.

## **Docker Konseptleri**

Docker, geliştiriciler ve sistem yöneticileri için uygulamaları konteynerlerle oluşturma, paylaşma ve çalıştırma platformudur. Konteynerlerin uygulamaları dağıtmak için kullanılmasına konteynerleştirme denir. Konteynerler yeni değildir, ancak uygulamaları kolayca dağıtmak için kullanılmalarıdır.

Konteynerleştirme artan bir şekilde popülerdir çünkü konteynerler:

- **Esnektir:** En karmaşık uygulamalar bile konteynerleştirilebilir.
- **Hafiftir:** Konteynerler ana makine çekirdeğini kullanır ve paylaşır, bu da onları sanal makinelerden çok daha sistem kaynakları açısından verimli hale getirir.
- **Taşınabilir:** Yerel olarak oluşturabilir, buluta dağıtabilir ve her yerde çalıştırabilirsiniz.
- **Gevşek bağlıdır:** Konteynerler yüksek derecede öz yeterli ve kapsüllenmiştir, böylece birini değiştirirken veya yükseltirken diğerlerini bozmazsınız.
- **Ölçeklenebilir:** Konteyner replikalarını bir veri merkezine artırabilir ve otomatik olarak dağıtabilirsiniz.
- **Güvenlidir:** Konteynerler, kullanıcının herhangi bir yapılandırma yapmasını gerektirmeyen süreçlere agresif kısıtlamalar ve izolasyonlar uygular.

Hoş geldiniz! Docker öğrenmek istediğiniz için heyecanlıyız. Docker Başlangıç Kılavuzu, size nasıl yapılacağını öğretir:

- Docker ortamınızı ayarlayın (bu sayfada)
- Bir görüntü oluşturun ve bir konteyner olarak çalıştırın
- Geliştirme makinenizde bir Kubernetes ortamı kurun ve kullanın
- Geliştirme makinenizde bir Swarm ortamı kurun ve kullanın
- Konteynerleştirilmiş uygulamalarınızı Docker Hub'da paylaşın

## **Görüntüler ve Konteynerler**

Temelde, bir konteyner sadece bir çalışma sürecidir, ana makineden ve diğer konteynerlerden izole tutmak için ona uygulanan bazı kapsülleme özellikleri vardır. Konteyner izolasyonunun en önemli yönlerinden biri, her konteynerin kendi özel dosya sistemini kullanmasıdır; bu dosya sistemi bir Docker görüntüsü tarafından sağlanır. Bir görüntü, bir uygulamayı çalıştırmak için gereken her şeyi içerir - kod veya ikili, çalışma zamanları, bağımlılıklar ve çalıştırmak için gereken diğer dosya sistemi nesneleri.

## **Konteynerler ve Sanal Makineler**

Bir konteyner, Linux'ta yerel olarak çalışır ve ana makine çekirdeğini diğer konteynerlerle paylaşır. Ayrı ayrı bir süreç çalıştırır, diğer herhangi bir yürütülebilir dosyadan daha fazla bellek almadığından hafiftir.

Buna karşılık, bir sanal makine (VM) bir hipervizör aracılığıyla ana kaynaklara sanal erişim sağlayan tam teşekküllü bir "konuk" işletim sistemi çalıştırır. Genel olarak, VM'ler, uygulama mantığınız tarafından tüketilenlerin ötesinde çok fazla yük getirir.


---

Öğrenilenleri Özetleyelim:

- Sanal Makineler yavaştır ve başlatılması çok zaman alır.
- Konteynerler hızlıdır ve ana işletim sistemini kullanıp ilgili kütüphaneleri paylaştığı için hızlı başlar.
- Konteynerler, sanal makinelerin aksine ana makine kaynaklarını israf etmez veya bloke etmez.
- Konteynerler, çalıştırdıkları uygulamaya özgü izole kütüphanelere ve ikililere sahiptir.
- Konteynerler, Konteynerleştirme motoru tarafından yönetilir.
- Docker, konteyner oluşturmak ve çalıştırmak için kullanılabilecek konteynerleştirme platformlarından biridir.

## **Docker Neden Kullanılır?**

Docker'ın ne olduğunu tartıştık. Ancak, Docker'a olan ihtiyaç nedir? Docker konteynerleri hafiftir ve oluşturulması ve dağıtılması çok kolaydır.

Docker bize konteynerler sağlar. Ve konteynerleştirme, bir uygulama, tüm bağımlılıkları, kütüphaneleri, ikilileri ve çalıştırmak için gereken yapılandırma dosyalarını içeren bir çalışma zamanı ortamını içerir, hepsi tek bir pakete bağlanır. Her uygulama diğerinden ayrı çalışır. Docker, bağımlılıkları konteynerlerin içinde tutarak bağımlılık sorununu çözer. Projelerinin bağımlılığına karşı geliştiricileri birleştirir.

## **Sanal Makineler üzerinden Konteynerlerin Kullanılmasının Faydaları**

Şimdi Docker'ın VM'ler (Sanal Makineler) üzerindeki avantajlarını tartışalım.

- VM'ler bir Konuk İşletim Sistemini çalıştırırken bir hipervizör kullanırken, Docker konteynerleri bir ana sunucuda (Linux için) doğrudan bir Docker motoru kullanarak çalışır, bu da onu daha hızlı ve hafif hale getirir.
- Docker konteynerleri VM'lere göre daha kolay entegre edilebilir.
- Tamamen sanallaştırılmış bir sistemle, daha fazla izolasyon elde edersiniz. Ancak, daha fazla kaynak gereklidir. Docker ile daha az izolasyon elde edersiniz. Ancak, daha az kaynak gerektirdiği için bir ana bilgisayarda binlerce konteyner çalıştırabilirsiniz.
- Bir VM başlatmak en az bir dakika alırken, bir Docker konteyneri genellikle birkaç saniye içinde başlar.
- Bir Sanal Makineden kaçmak, bir Konteynerden kaçmaktan daha zordur.
- VM'lerin aksine RAM'i önceden tahsis etmenize gerek yoktur. Bu nedenle Docker konteynerleri VM'lere göre daha az RAM kullanır. Bu nedenle sadece gereken RAM miktarı kullanılır.

## **Docker Nasıl Çalışır?**

Docker'ın avantajlarını şimdi anladık. Docker'ın işleyişinden bahsedelim. Docker'ın bir docker motoru vardır, bu Docker sisteminin kalbidir. Bir istemci-sunucu uygulamasıdır. Üç ana bileşeni vardır:

- Bir sunucu, daemon süreci adı verilen uzun süreli bir süreç türüdür.
- Bir istemci, Docker CLI (Komut Satırı Arayüzü) ve
- İstemci (Docker CLI) ve sunucu (Docker Daemon) arasındaki iletişimi sağlamak için kullanılan bir REST API.

Docker daemon, istemciden komut alır ve Docker nesnelerini, örneğin görüntüleri, konteynerleri, ağları ve hacimleri yönetir. Docker istemcisi ve daemon aynı sistemde çalışabilir veya bir Docker istemcisini uzaktaki bir Docker daemon'a bağlayabilirsiniz. Bir REST API, UNIX soketleri veya bir ağ arayüzü üzerinden iletişim kurabilirler.

Linux'ta, Docker ana makinesi docker daemon'ı çalıştırır ve docker istemcisine terminalden erişilebilir. Windows/OS X'te, Docker toolbox adında ek bir araç vardır. Bu araç kutusu, Win/OS sistemi üzerinde docker ortamını kurar. Bu araç kutusu şunları kurar: Docker İstemcisi, Compose, Kitematic, Machine ve Virtual Box

## **Docker'da Kullanılan Teknoloji**

Docker'da kullanılan programlama dili GO'dur. Docker, Linux çekirdeğinin çeşitli özelliklerinden yararlanır, örneğin ad alanları ve cgroups.

- **ad alanları:** Docker, izole çalışma alanı sağlamak için ad alanlarını kullanır, bu çalışma alanlarına konteyner denir. Bir konteyner çalıştırıldığında, docker onun için bir ad alanları seti oluşturur ve izolasyon sağlar. Bir konteynerin her bir yönü ayrı bir ad alanında çalışır ve erişimi o ad alanıyla sınırlıdır.
- **cgroups (kontrol grupları):** cgroups, bir süreç koleksiyonunun kaynak kullanımını (CPU, bellek, Disk I/O, ağ vb.) sınırlamak ve izole etmek için kullanılır. cgroups, Docker motorunun mevcut donanım kaynaklarını konteynerlere paylaştırmasına ve gerektiğinde sınır ve kısıtlamaları uygulamasına olanak tanır.
- **UnionFS (Birlik dosya sistemleri):** Birlik dosya sistemleri, katmanlar oluşturarak çalışır, bu da onları çok hafif ve hızlı yapar. Docker motoru, konteynerler için yapı taşları sağlamak amacıyla UnionFS'yi kullanır. Docker Motoru, ad alanlarını, cgroups ve UnionFS' ---

Docker Motoru, ad alanlarını, cgroups ve UnionFS'yi bir konteyner formatı adı verilen bir sarmalayıcı içinde birleştirir. Varsayılan konteyner formatı libcontainer'dır.

## **Docker Masaüstü'nü Kurma**

Konteynerleştirilmiş uygulamalar geliştirmeye başlamanın en iyi yolu, OSX veya Windows için Docker Masaüstü'nü kullanmaktır. Docker Masaüstü, Kubernetes veya Swarm'ı yerel geliştirme makinenizde kolayca kurmanıza olanak tanır, böylece uygulamalar için geliştirme yaptığınız orkestratörün tüm özelliklerini hemen kullanabilirsiniz, küme gerekli değildir. İşletim sisteminize uygun kurulum talimatlarını takip edin:

- **OSX**
- **Windows**

## **Docker Günlük Kullanım Komutları**

1. **docker --version**
    - Bu komut, yüklenen docker sürümünü almak için kullanılır.
2. **docker pull**
    - Kullanım: `docker pull <görüntü adı>`
    - Bu komut, docker deposundan (hub.docker.com) görüntüleri çekmek için kullanılır.
3. **docker run**
    - Kullanım: `docker run -it -d <görüntü adı>`
    - Bu komut, bir görüntüden bir konteyner oluşturmak için kullanılır.
4. **docker ps**
    - Bu komut, çalışan konteynerleri listelemek için kullanılır.
5. **docker ps -a**
    - Bu komut, tüm çalışan ve çıkış yapmış konteynerleri gösterir.
6. **docker exec**
    - Kullanım: `docker exec -it <konteyner id> bash`
    - Bu komut, çalışan bir konteynera erişmek için kullanılır.
7. **docker stop**
    - Kullanım: `docker stop <konteyner id>`
    - Bu komut, çalışan bir konteyneri durdurur.
8. **docker kill**
    - Kullanım: `docker kill <konteyner id>`
    - Bu komut, konteynerin çalışmasını hemen durdurarak konteyneri öldürür. ‘docker kill’ ve ‘docker stop’ arasındaki fark, ‘docker stop’ konteynerin zarif bir şekilde kapanmasına zaman tanırken, konteynerin durdurulması çok zaman alıyorsa, onu öldürmeyi seçebilirsiniz.
9. **docker commit**
    - Kullanım: `docker commit <konteyner id> <kullanıcıadı/görüntüadı>`
    - Bu komut, düzenlenmiş bir konteynerin yeni bir görüntüsünü yerel sistemde oluşturur.
10. **docker login**
- Bu komut, docker hub deposuna giriş yapmak için kullanılır.
1. **docker push**
- Kullanım: `docker push <kullanıcıadı/görüntü adı>`
- Bu komut, bir görüntüyü docker hub deposuna göndermek için kullanılır.
1. **docker images**
- Bu komut, tüm yerel olarak depolanan docker görüntülerini listeler.
1. **docker rm**
- Kullanım: `docker rm <konteyner id>`
- Bu komut, durdurulmuş bir konteyneri silmek için kullanılır.
1. **docker rmi**
- Kullanım: `docker rmi <görüntü-id>`
- Bu komut, bir görüntüyü yerel depodan silmek için kullanılır.
1. **docker build**
- Kullanım: `docker build <docker dosyasının yolunu>`
- Bu komut, belirtilen docker dosyasından bir görüntü oluşturmak için kullanılır.

## **İlk Docker Uygulamamızı Oluşturma**

Bir PHP uygulamamız var ve bunu sahneleme veya üretim sunucusuna dağıtmak istiyoruz. İlk olarak, uygulamanın kök dizininde docker yapılandırma betiğini içerdiğinden emin oluyoruz.

1. Uygulamanızda bir Dockerfile oluşturun
    - Uygulamanızın kökünde Dockerfile adında bir dosya oluşturun ve docker'a, üretim veya sahneleme ortamında çalışırken ne yapılacağını belirtmek için aşağıdaki kodu ekleyin.

        ```
        FROM PHP:7.2-Apache
        COPY src/ /var/www/html/
        EXPOSE 80
        
        ```

    - Yukarıdaki, sahneleme veya üretim sunucusunda PHP sürüm 7.2'yi yapılandıran, /src dizinindeki PHP dosyalarını /var/www/html/ dizinine kopyalayan ve port 80'e erişilebilir olmasını sağlayan bir örnektir.
2. Sahneleme veya Üretim Sunucusunda Docker'ı Yükleme
    - Mac için docker'ı buradan alın.
    - Windows için buraya gidin.
3. Docker'ı Çalıştırma
    - Docker, sahneleme veya üretim sunucusunda yüklendikten sonra, balina simgesini tıklayarak docker'ı çalıştırın.
4. Uygulamanızı Dağıtma
    - Uygulamayı sahneleme veya üretim sunucusuna kopyalayın ve şunları yapın:
        - Terminalde projenin dizinine gidin ve bir docker görüntüsü oluşturun.
        - Terminalde aşağıdaki komutu çalıştırın ve uygulamanın bir docker görüntüsünü oluşturacak ve uygulamanın başarılı bir şekilde çalışabilmesi için gerekli tüm bağımlılıkları indirecektir.

            ```bash
            docker build -t <görüntünüze vereceğiniz ad>
            
            ```

        - Uygulamanın Docker Görüntüsünü Çalışan bir Konteyner'e Dönüştürün.
            - Terminalde aşağıd---
- Terminalde aşağıdaki komutu çalıştırın ve tüm gereksinimleri ile birlikte çalışan bir konteyner oluşturarak ve uygulamayı başlatarak uygulamanın Docker görüntüsünü kullanacaktır.

    ```bash
    docker run -p 9090:80 <konteynere vereceğiniz ad>
    
    ```

    - 9090, uygulamamıza erişmek istediğimiz porttur. 80 ise konteynerin ana makineye erişim için açık olduğu porttur.

## **Aşağıda Bazı Kullanışlı Docker Komutları**

- **Çalışan bir görüntüyü durdurma**

    ```bash
    docker stop <görüntü-id>
    
    ```

- **Çalışmayan bir görüntüyü başlatma**

    ```bash
    docker start <görüntü-id>
    
    ```

- **Bir görüntüyü docker'dan kaldırma**

    ```bash
    docker rmi <görüntü-id>
    
    ```

- **Bir konteyneri docker'dan kaldırma**

    ```bash
    docker rm <konteyner-id>
    
    ```


## **Etiketler**

- Docker
- Konteynerler
- Kubernetes
- DevOps

Infrastructure as Code (IaC), IT altyapısının otomasyonu ve yönetimi için bir yöntemdir. IaC ile kullanıcılar, altyapı bileşenlerini ve yapılandırmalarını, kod ve otomasyon araçları kullanarak yönetir ve hızla dağıtır.

IaC'nin avantajları şunlardır:

Hız: IaC kullanarak, şirketler ve geliştiriciler altyapıları hızla oluşturabilir ve yönetebilir. Bu, projeleri daha hızlı başlatmayı ve güncellemeyi mümkün kılar. Konsistans: IaC, altyapı hatalarını ve uyumsuzluklarını azaltmaya yardımcı olabilir çünkü aynı yapılandırmaları sürekli olarak kullanabilirsiniz. Maliyet Tasarrufu: IaC, manuel süreçleri azaltarak ve hataları önleyerek iş yükünü azaltabilir ve maliyet tasarrufu sağlayabilir. Belgelendirme: Altyapınız kodla yönetildiğinde, kod kendisi bir belge olarak hizmet eder. Bu, ekibin altyapı hakkında bilgi sahibi olmasını kolaylaştırır. Kurtarma: Hatalar ve sistem çökmeleri durumunda, IaC kullanarak sistemleri hızla geri yükleyebilirsiniz. IaC yönetimi için kullanılan araçlardan bazıları Ansible, Terraform, ve Puppet’tır. Bu araçlar, altyapıyı kod olarak oluşturmanıza, dağıtmanıza ve değiştirmenize olanak tanır.

**1. Basit bir Python Flask Uygulaması Oluşturma**

Öncelikle, bir Flask uygulaması oluşturalım:

`app.py` adında bir dosya oluşturun:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Merhaba, Docker ve Flask!"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

```

**2. Gereksinimler Dosyası Oluşturma**

Bu uygulamanın çalışabilmesi için gerekli olan Flask kütüphanesini belirtelim:

`requirements.txt` adında bir dosya oluşturun:

```
flask==2.0.1

```

**3. Dockerfile Oluşturma**

Şimdi, Flask uygulamasını Docker container'ında çalıştırmak için bir Dockerfile oluşturalım:

`Dockerfile` adında bir dosya oluşturun:

```
# Resmi Python 3.9 sürümünü temel alarak bir image oluşturuyoruz
FROM python:3.9

# Uygulamanın çalıştırılacağı dizini ayarlayalım
WORKDIR /usr/src/app

# Uygulamanın gereksinimlerini container'a kopyalayalım
COPY requirements.txt .

# Uygulamanın gereksinimlerini yükleyelim
RUN pip install --no-cache-dir -r requirements.txt

# Uygulama dosyasını container'a kopyalayalım
COPY app.py .

# Uygulamanın çalıştırılacağı portu belirtelim
EXPOSE 5000

# Uygulamayı başlatma komutu
CMD ["python", "app.py"]

```

**4. Docker Image'ını Oluşturma ve Çalıştırma**

```
docker build -t flask_app .

```

Ardından, oluşturduğunuz image'ı aşağıdaki komutla çalıştırabilirsiniz:

```
docker run -p 5000:5000 flask_app

```

Bu adımları tamamladıktan sonra, tarayıcınıza gidip `http://localhost:5000` adresine eriştiğinizde "Merhaba, Docker ve Flask!" mesajını görmelisiniz.

---

**1. Basit bir Node.js Express Uygulaması Oluşturma**

Öncelikle, yeni bir proje klasörü oluşturun ve içine gidin:

```bash
mkdir node_express_app && cd node_express_app

```

Express ve diğer gerekli modülleri yüklemek için:

```bash
npm init -y
npm install express

```

`app.js` adında bir dosya oluşturun:

```jsx
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Merhaba, Docker ve Express!");
});

app.listen(PORT, () => {
    console.log(`Server çalışıyor: <http://localhost>:${PORT}`);
});

```

**2. Dockerfile Oluşturma**

Şimdi, Express uygulamasını Docker container'ında çalıştırmak için bir Dockerfile oluşturacağız:

`Dockerfile` adında bir dosya oluşturun:

```
# Resmi Node.js sürümünü temel alarak bir image oluşturuyoruz
FROM node:16

# Uygulamanın çalıştırılacağı dizini ayarlayalım
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını container'a kopyalayalım
COPY package*.json .

# Uygulamanın gereksinimlerini yükleyelim
RUN npm install

# Uygulama dosyasını ve diğer gerekli dosyaları container'a kopyalayalım
COPY . .

# Uygulamanın çalıştırılacağı portu belirtelim
EXPOSE 3000

# Uygulamayı başlatma komutu
CMD ["node", "app.js"]

```

**3. .dockerignore Dosyası Oluşturma**

Docker image oluştururken, gereksiz dosyaların kopyalanmaması için bir `.dockerignore` dosyası oluşturalım:

```
node_modules
npm-debug.log

```

**4. Docker Image'ını Oluşturma ve Çalıştırma**

Aşağıdaki komutla Docker image'ını oluşturabilirsiniz:

```bash
docker build -t express_app .

```

Ardından, oluşturduğunuz image'ı aşağıdaki komutla çalıştırabilirsiniz:

```bash
docker run -p 3000:3000 express_app

```

Bu adımları tamamladıktan sonra, tarayıcınıza gidip `http://localhost:3000` adresine eriştiğinizde "Merhaba, Docker ve Express!" mesajını görmelisiniz.

Bu adımlar, Docker ve Express ile uygulama geliştirme konusunda temel bir başlangıç yapmanız için yardımcı olacaktır!

---

**1. Go Uygulaması Oluşturma:**

**Adım 1:** İlk olarak Go'da kullanmak üzere gereken bağımlılıkları yükleyin:

```bash
go get -u github.com/lib/pq
go get -u go.mongodb.org/mongo-driver/mongo

```

**Adım 2:** Temel bir Go uygulaması oluşturun (`app.go`):

```go
package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/lib/pq"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func connectPostgreSQL() *pq.Conn {
	connStr := "user=username password=password dbname=mydb sslmode=disable"
	db, err := pq.Connect(connStr)
	if err != nil {
		log.Fatal(err)
	}
	return db
}

func connectMongoDB() *mongo.Client {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	return client
}

func handler(w http.ResponseWriter, r *http.Request) {
	// PostgreSQL bağlantısını test edelim.
	db := connectPostgreSQL()
	defer db.Close()

	// MongoDB bağlantısını test edelim.
	mongoClient := connectMongoDB()
	defer mongoClient.Disconnect(context.TODO())

	fmt.Fprintln(w, "Bağlantılar başarılı!")
}

func main() {
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}

```

Bu basit Go uygulaması, PostgreSQL ve MongoDB'ye bağlanmayı deneyerek bağlantının başarılı olup olmadığını kontrol eder.

**2. Docker Compose ile Ortamı Hazırlama**

**Adım 1:** Go uygulaması için bir `Dockerfile` oluşturun:

**Adım 2:** Docker Compose dosyası (`docker-compose.yml`) oluşturun:

```yaml
version: '3'

services:
  web:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - postgres
      - mongo

  postgres:
    image: postgres:13
    environment:
      POSTGRES_USER: username
      POSTGRES_PASSWORD: password
      POSTGRES_DB: mydb
    volumes:
      - pgdata:/var/lib/postgresql/data

  mongo:
    image: mongo:4.4
    ports:
      - "27017:27017"
    volumes:
      - mongodata:/data/db

volumes:
  pgdata:
  mongodata:

```

Bu `docker-compose.yml` dosyası, üç servisi tanımlar: Go web uygulaması (`web`), PostgreSQL (`postgres`) ve MongoDB (`mongo`).

**Adım 3:** Docker Compose ile tüm servisleri ayağa kaldırın:

```bash
docker-compose up

```

Bu komut, önce Go uygulamasını, ardından PostgreSQL ve MongoDB'yi ayağa kaldırır. Bu şekilde, Go uygulamanız PostgreSQL ve MongoDB'ye bağlanabilir.

Uygulamayı başlattıktan sonra, `http://localhost:8080` adresine giderek bağlantıların başarılı olup olmadığını kontrol edebilirsiniz.

**Not:** Gerçek bir uygulamada, veritabanı bağlantı bilgileri (örn. kullanıcı adı, parola) gibi duyarlı bilgileri kodda saklamamalısınız. Bunun yerine, bu bilgileri bir yapılandırma dosyasında veya çevre değişkenlerinde saklamalısınız.

---

## Docker Volume

Docker container'ları efemeral (geçici) doğaya sahiptir. Yani bir container durduğunda veya silindiğinde içerisindeki veriler de kaybolur. Ancak bazen uygulamalarımızın veri kalıcılığına ihtiyaç duyarız; bu noktada Docker volume'leri devreye girer.

### **Neden Docker Volume?**

- Veri kalıcılığı: Container ölse bile verinizin yaşamasını istiyorsanız.
- Veri paylaşımı: Birden fazla container arasında veri paylaşımı yapmak isteniyorsa.
- Host ve container arasında veri paylaşımı: Host makinanızdaki bir klasörü veya dosyayı container ile paylaşmak istediğinizde.

### **Örnek:**

Bir MySQL container'ını çalıştıralım ve veri kalıcılığı için bir volume oluşturalım:

```bash
$ docker volume create mysql_data
$ docker run -d --name mysql-container -v mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql:latest

```

Bu örnekte, `mysql_data` adında bir Docker volume oluşturduk ve bu volume'u MySQL container'ının `/var/lib/mysql` dizinine bağladık. Böylece MySQL veritabanı container durduğunda veya silindiğinde dahi korunur.

## Docker Network

Docker, container'ların birbiriyle ve dış dünya ile iletişim kurmasını sağlayan ağ özellikleri sunar. Docker'ın bazı varsayılan network tipleri vardır: bridge, host, none ve overlay.

### **Neden Docker Network?**

- İzolasyon: Farklı projeler veya uygulamalar için farklı ağlar oluşturabilirsiniz.
- İletişim: Farklı container'ları birbiriyle iletişim kurmaları için aynı ağa bağlayabilirsiniz.
- İsim çözümleme: Aynı ağa bağlı container'lar birbirlerini isimleriyle (hostname) bulabilirler.

### **Örnek:**

İki tane container'ı aynı ağda çalıştıralım ve birbiriyle iletişim kurmalarını sağlayalım:

```bash
$ docker network create my_network
$ docker run -d --name container1 --network my_network alpine:latest
$ docker run -d --name container2 --network my_network alpine:latest

```

Bu örnekte, `my_network` adında bir Docker ağ oluşturduk ve iki container'ı bu ağa bağladık. Şimdi `container1` içerisinden `container2`'ye (veya tersi) isim üzerinden ping atabiliriz.

---

Bu, Docker volume ve network konularının basit bir özeti oldu. Docker'ın sunduğu özellikler oldukça geniş ve kapsamlıdır, bu yüzden daha derinlemesine öğrenmek isterseniz resmi Docker dökümantasyonuna göz atmanızı tavsiye ederim.

## Docker Volume İleri Kullanım

### 1. Host ile Veri Paylaşımı (Bind Mounts)

Docker volume'ların yanı sıra, doğrudan host sistemi ile container arasında veri paylaşımı yapabilirsiniz. Bu, özellikle geliştirme aşamasında çok kullanışlıdır.

**Örnek:**

```bash
$ docker run -d --name my-app -v /path/on/host:/path/in/container nginx:latest

```

Bu örnekte, host makinadaki `/path/on/host` klasörü ile container'daki `/path/in/container` klasörünü birbirine bağladık.

### 2. Volume Kullanarak Başka Bir Container'dan Veri Kopyalama

Bir container'dan bir volume'a veri kopyalayabilir ve bu volume'u başka bir container'a bağlayabilirsiniz.

**Örnek:**

```bash
$ docker create --name temp-container -v shared_volume:/shared_data busybox
$ docker cp local_file.txt temp-container:/shared_data/
$ docker run -d --name my-app -v shared_volume:/app/data nginx:latest

```

Bu örnekte, ilk olarak `shared_volume` adında bir volume oluşturduk. Ardından, yerel sistemdeki `local_file.txt` dosyasını bu volume'a kopyaladık. En son olarak bu volume'u bir nginx container'ına bağladık.

## Docker Network İleri Kullanım

### 1. Özel IP Adresi Atama

Bir Docker container'ına özel bir IP adresi atayabilirsiniz.

**Örnek:**

```bash
$ docker network create --subnet=192.168.1.0/24 my_custom_network
$ docker run -d --name custom_ip_container --network my_custom_network --ip 192.168.1.5 nginx:latest

```

Bu örnekte, `my_custom_network` adında özel bir subnet ile bir network oluşturduk. Ardından bu ağa bağlı bir container oluşturduk ve ona `192.168.1.5` IP adresini atadık.

### 2. HostPort Kullanarak Container'ı Dış Dünyaya Açma

Bir container'ın belirli bir portunu, host makinenin portuna bağlayarak dış dünyaya açabilirsiniz.

**Örnek:**

```bash
$ docker run -d --name webserver -p 8080:80 nginx:latest

```

Bu örnekte, nginx web sunucusunu `80` portunda çalıştıran bir container oluşturduk. Bu container'ın `80` numaralı portunu, host makinamızın `8080` portuna bağladık. Böylece, host makinamıza gelen `8080` portundaki trafiği, container'ın `80` portuna yönlendiriyoruz.

---

### 1. `.env` Dosyası Oluşturma

Bu dosya, projenizin kök dizininde olmalıdır. İçeriği şu şekilde olacaktır:

```
MYSQL_ROOT_PASSWORD=my-secret-pw
MYSQL_DATABASE=mydatabase
MYSQL_USER=myuser
MYSQL_PASSWORD=mypassword
PMA_HOST=db

```

Bu dosya, MySQL için root şifresi, veritabanı adı, kullanıcı adı ve şifre bilgilerini içerir. Ayrıca phpMyAdmin'in MySQL sunucusuna bağlanması için gereken host bilgisini (bizim örneğimizde `db` container adı) içerir.

### 2. `docker-compose.yml` Dosyası Oluşturma

```yaml
version: '3'

services:
  db:
    image: mysql:5.7
    volumes:
      - mysql_data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    ports:
      - "3306:3306"

  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    environment:
      PMA_HOST: ${PMA_HOST}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    ports:
      - "8080:80"

volumes:
  mysql_data:

```

Bu `docker-compose.yml` dosyasında:

- MySQL servisini (5.7 sürümü ile) ve phpMyAdmin servisini tanımlıyoruz.
- `.env` dosyasındaki değişkenleri kullanarak MySQL ve phpMyAdmin yapılandırmalarını ayarlıyoruz.
- MySQL verileri için bir Docker volume oluşturuyoruz.
- MySQL'i 3306 portunda ve phpMyAdmin'i 8080 portunda dış dünyaya açıyoruz.

### 3. Servisleri Çalıştırma

Artık servisleri başlatmak için şu komutu kullanabilirsiniz:

```bash
$ docker-compose up -d

```

Bu komut, arka planda (`-d` ile) servisleri çalıştırır. Şimdi tarayıcıdan `http://localhost:8080` adresine giderek phpMyAdmin arayüzüne erişebilirsiniz. Giriş yapmak için `.env` dosyasında belirttiğiniz MySQL bilgilerini kullanabilirsiniz.

### 4. Servisleri Durdurma ve Kaldırma

Projeyi durdurmak için şu komutu kullanabilirsiniz:

```bash
$ docker-compose down

```

Bu komut, tüm servisleri durdurur ve container'ları, network'leri kaldırır. Eğer volume'ü de kaldırmak isterseniz `docker-compose down -v` komutunu kullanabilirsiniz.

Bu basit adımlarla, `.env` dosyasını kullanarak `docker-compose` ile MySQL ve phpMyAdmin kurulumunu gerçekleştirebilirsiniz.

# DEVAMI YAZILIYOR