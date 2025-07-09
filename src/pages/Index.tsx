import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const popularGames = [
    {
      title: "Cyberpunk 2077",
      platform: "Steam",
      price: "₽1,999",
      originalPrice: "₽2,999",
      discount: "-33%",
      image: "img/94b658db-027b-4d97-ba16-79f455f47b36.jpg",
    },
    {
      title: "Elden Ring",
      platform: "Steam",
      price: "₽2,499",
      originalPrice: null,
      discount: null,
      image: "img/94b658db-027b-4d97-ba16-79f455f47b36.jpg",
    },
    {
      title: "God of War",
      platform: "Epic Games",
      price: "₽1,799",
      originalPrice: "₽2,499",
      discount: "-28%",
      image: "img/94b658db-027b-4d97-ba16-79f455f47b36.jpg",
    },
    {
      title: "Red Dead Redemption 2",
      platform: "Steam",
      price: "₽2,199",
      originalPrice: null,
      discount: null,
      image: "img/94b658db-027b-4d97-ba16-79f455f47b36.jpg",
    },
  ];

  const categories = [
    { name: "Экшен", icon: "Zap", count: "150+ игр" },
    { name: "RPG", icon: "Sword", count: "80+ игр" },
    { name: "Инди", icon: "Heart", count: "200+ игр" },
    { name: "Симуляторы", icon: "Gamepad2", count: "60+ игр" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Космические звёзды */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-80 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 right-20 w-0.5 h-0.5 bg-gray-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Icon
                  name="Rocket"
                  size={32}
                  className="text-gray-400 animate-bounce"
                />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-orange-400 to-transparent animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold text-white">LunixShop</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Главная
              </a>
              <a
                href="#categories"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Категории
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                О нас
              </a>
              <a
                href="#support"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Поддержка
              </a>
            </div>
            <Button className="bg-gray-600 hover:bg-gray-700">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="img/5cdd0495-61b9-4106-b930-fb22c445ce19.jpg"
            alt="Gaming background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-gray-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Лучшие игры
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
              по лучшим ценам
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Цифровые ключи для Steam и Epic Games. Мгновенная доставка, гарантия
            качества
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <div className="relative flex-1 w-full">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              />
              <Input
                placeholder="Поиск игр..."
                className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder-slate-400"
              />
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900"
            >
              Найти
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">Популярные игры</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularGames.map((game, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {game.discount && (
                    <Badge className="absolute top-2 right-2 bg-red-600 text-white">
                      {game.discount}
                    </Badge>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute bottom-2 left-2 bg-slate-900/80 text-white"
                  >
                    {game.platform}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-white text-lg mb-2">
                  {game.title}
                </CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-400">
                      {game.price}
                    </span>
                    {game.originalPrice && (
                      <span className="text-slate-400 line-through">
                        {game.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button className="w-full bg-gray-600 hover:bg-gray-700">
                  <Icon name="Download" size={16} className="mr-2" />
                  Купить ключ
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Категории игр
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <Icon
                    name={category.icon}
                    size={48}
                    className="text-gray-400 mx-auto mb-4"
                  />
                  <CardTitle className="text-white text-xl mb-2">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {category.count}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">О нас</h2>
              <p className="text-slate-300 text-lg mb-6">
                Мы — команда геймеров, которая понимает важность быстрого и
                надёжного получения игр. Наш магазин специализируется на продаже
                лицензионных цифровых ключей для популярных платформ.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-400">5000+</div>
                  <div className="text-slate-400">Игр в каталоге</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">24/7</div>
                  <div className="text-slate-400">Поддержка</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">
                    99.9%
                  </div>
                  <div className="text-slate-400">Успешных доставок</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gray-600/20 to-gray-800/20 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Наши преимущества
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  Мгновенная доставка ключей
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  Гарантия подлинности
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  Лучшие цены на рынке
                </li>
                <li className="flex items-center text-slate-300">
                  <Icon
                    name="Check"
                    size={20}
                    className="text-green-400 mr-3"
                  />
                  Поддержка в Telegram
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Поддержка</h2>
          <p className="text-slate-300 text-lg mb-8">
            Возникли вопросы? Мы готовы помочь! Свяжитесь с нами удобным
            способом
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MessageCircle"
                  size={48}
                  className="text-gray-400 mx-auto mb-4"
                />
                <CardTitle className="text-white mb-2">Telegram</CardTitle>
                <CardDescription className="text-slate-400 mb-4">
                  Быстрая поддержка в мессенджере
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-gray-400 text-gray-400 hover:bg-gray-400 hover:text-white"
                >
                  Написать
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Mail"
                  size={48}
                  className="text-green-400 mx-auto mb-4"
                />
                <CardTitle className="text-white mb-2">Email</CardTitle>
                <CardDescription className="text-slate-400 mb-4">
                  support@gamekeys.ru
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white"
                >
                  Отправить
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Icon
                  name="HelpCircle"
                  size={48}
                  className="text-purple-400 mx-auto mb-4"
                />
                <CardTitle className="text-white mb-2">FAQ</CardTitle>
                <CardDescription className="text-slate-400 mb-4">
                  Частые вопросы и ответы
                </CardDescription>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                >
                  Читать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Icon
                    name="Rocket"
                    size={32}
                    className="text-gray-400 animate-bounce"
                  />
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-gradient-to-t from-orange-400 to-transparent animate-pulse"></div>
                </div>
                <span className="text-2xl font-bold text-white">LunixShop</span>
              </div>
              <p className="text-slate-400">
                Ваш надёжный партнёр в мире цифровых игр
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Платформы</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Steam</li>
                <li>Epic Games</li>
                <li>Origin</li>
                <li>Uplay</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Жанры</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Экшен</li>
                <li>RPG</li>
                <li>Симуляторы</li>
                <li>Инди</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-slate-400">
                <li>support@lunixshop.ru</li>
                <li>Telegram: @lunixshop_support</li>
                <li>Работаем 24/7</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 LunixShop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
