export const state = () => ({
	all: [
					{	id: 'bay', 
						title: 'Bayern', 
						country: 'Germany', 
						description: 'FCB, Bayern Munich, or FC Bayern, is a German sports club based in Munich, Bavaria (Bayern). It is best known for its professional football team, which plays in the Bundesliga, the top tier of the German football league system, and is the most successful club in German football history, having won a record 28 national titles and 18 national cups.', 
						logo: '/images/bayern.jpg',
						headcoach: 'Niko Covach',
						league: 'Bundesliga',
						stadium: 'Allianz Arena',
						website: 'https://fcbayern.com/en',
					},
					{	id: 'juv', 
						title: 'Milan', 
						country: 'Italy', 
						description: 'Associazione Calcio Milan, commonly referred to as A.C. Milan or simply Milan, is a professional football club in Milan, Italy, founded in 1899. The club has spent its entire history, with the exception of the 1980–81 and 1982–83 seasons, in the top flight of Italian football, known as Serie A since 1929–30. Milan has won a joint record three Intercontinental Cups and one FIFA Club World Cup, seven European Cup/Champions League titles (Italian record), the UEFA Super Cup a joint record five times and the Cup Winners Cup twice. With 18 league titles, Milan is also the joint-second most successful club in Serie A, along with local rivals Internazionale and behind Juventus (34 league titles). They have also won the Coppa Italia five times, and the Supercoppa Italiana seven. Home games are played at San Siro, also known as the Stadio Giuseppe Meazza. The stadium, which is shared with city rivals Internazionale, is the largest in Italian football, with a total capacity of 80,018. The club is one of the wealthiest in Italian and world football.', 
						logo: '/images/milano.jpg',
						headcoach: 'Paolo Scaroni',
						league: 'Serie A',
						stadium: 'San Siro',
						website: 'https://www.acmilan.com/it',
					},
					{	id: 'liv', 
						title: 'Liverpool', 
						country: 'England', 
						description: 'Liverpool Football Club is a professional football club in Liverpool, England, that competes in the Premier League, the top tier of English football. The club has won 5 European Cups, more than any other English club, 3 UEFA Cups, 3 UEFA Super Cups, 18 League titles, 7 FA Cups, a record 8 League Cups, and 15 FA Community Shields.Founded in 1892, the club joined the Football League the following year and has played at Anfield since its formation. Liverpool established itself as a major force in English and European football in the 1970s and 1980s when Bill Shankly and Bob Paisley led the club to 11 League titles and seven European trophies. Under the management of Rafael Benítez and captained by Steven Gerrard, Liverpool became European champions for the fifth time in 2005. The club is one of the best supported teams in the world.Liverpool has long-standing rivalries with Manchester United and Everton.', 
						logo: '/images/liverpool.jpg',
						headcoach: 'Jurgen Klopp',
						league: 'Premier League',
						stadium: 'Anfield',
						website: 'https://www.liverpoolfc.com/welcome-to-liverpool-fc',
					},
					{	id: 'manun', 
						title: 'Manchester United', 
						country: 'England', 
						description: 'Manchester United Football Club, commonly known as Man United, or simply United, is a professional football club based in Old Trafford, Greater Manchester, England, that competes in the Premier League, the top flight of English football. Nicknamed "the Red Devils", the club was founded as Newton Heath LYR Football Club in 1878, changed its name to Manchester United in 1902 and moved to its current stadium, Old Trafford, in 1910. Manchester United have won more trophies than any other club in English football, with a record 20 League titles, 12 FA Cups, 5 League Cups and a record 21 FA Community Shields. United have also won three UEFA Champions Leagues, one UEFA Europa League, one UEFA Cup Winners Cup, one UEFA Super Cup, one Intercontinental Cup and one FIFA Club World Cup. In 1998–99, the club became the first in the history of English football to achieve the continental European treble. By winning the UEFA Europa League in 2016–17, they became one of five clubs to have won all three main UEFA club competitions, and the only English club to have won every competition available to them. The 1958 Munich air disaster claimed the lives of eight players. In 1968, under the management of Matt Busby, Manchester United became the first English football club to win the European Cup. Alex Ferguson won 38 trophies as manager, including 13 Premier League titles, 5 FA Cups and 2 UEFA Champions Leagues, between 1986 and 2013, when he announced his retirement. Manchester United is one of the most widely supported football clubs in the world, and has rivalries with Liverpool, Manchester City, Arsenal, and Leeds United.', 
						logo: '/images/manchesterunited.jpg',
						headcoach: 'Ole Gunnar Solskjaer',
						league: 'Premier League',
						stadium: 'Old Trafford',
						website: 'https://www.manutd.com/',
					},
					{	id: 'sev', 
						title: 'Sevilla', 
						country: 'Spain', 
						description: 'Sevilla is Spain’s oldest sporting club solely devoted to football. Sevilla FC is based in Seville, the capital and largest city of the autonomous community of Andalusia. Sevilla FC plays in Spain’s top flight, La Liga. The club was formed on 25 January 1890, Scot Mr. Edward Farquharson Johnston being their first president. A few years later, on 14 October 1905, the club’s articles of association were registered in the Civil Government of Seville under the presidency of the Jerez-born José Luis Gallegos Arnosa. Sevilla FC is also the most successful club in Andalusia, winning a national league title in 1945–46, five Spanish Cups (1935, 1939, 1948, 2007 and 2010), one Spanish Super Cup (2007), a record five UEFA Cups/UEFA Europa Leagues (2006, 2007, 2014, 2015 and 2016) and the 2006 UEFA Super Cup. Its youth team Sevilla Atlético, founded in 1958, currently play in Segunda División B. The Club’s home ground is the 42,714-seat Ramón Sánchez Pizjuán Stadium. It is located in the neighborhood of Nervión, Seville and owes its name to Ramón Sánchez Pizjuan, who was Sevilla FC’s President for 17 years. Sevilla FC has contributed many players to the Spain national team throughout their history.', 
						logo: '/images/sevilla.jpg',
						headcoach: 'Pablo Machin',
						league: 'La Liga',
						stadium: 'Ramon Sanchez Pizjuan',
						website: 'https://www.sevillafc.es/',
					},
					{
						id: 'realmad',
						title: 'Real Madrid',
						country: 'Spain',
						description: 'Real Madrid Club de Fútbol ("Royal Madrid Football Club"), commonly known as Real Madrid, is a professional football club based in Madrid, Spain. Founded on 6 March 1902 as the Madrid Football Club, the club has traditionally worn a white home kit since inception. The word real is Spanish for "royal" and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Real Madrid is one of three founding members of La Liga that have never been relegated from the top division since its inception in 1929, along with Athletic Bilbao and Barcelona. The club holds many long-standing rivalries, most notably El Clásico with Barcelona and El Derbi with Atlético Madrid. Real Madrid established itself as a major force in both Spanish and European football during the 1950s, winning five consecutive European Cups and reaching the final seven times. This team, which consisted of players such as Alfredo Di Stéfano, Ferenc Puskás, Francisco Gento and Raymond Kopa, is considered by some in the sport to be the greatest team of all time. In domestic football, the club has won 64 trophies; a record 33 La Liga titles, 19 Copa del Rey, 10 Supercopa de España, a Copa Eva Duarte, and a Copa de la Liga. In European and worldwide competitions, the club has won a record 26 trophies; a record 13 European Cup/UEFA Champions League titles, two UEFA Cups and four UEFA Super Cups. Real Madrid was recognised as the FIFA Club of the 20th Century on 11 December 2000, and received the FIFA Centennial Order of Merit on 20 May 2004. The club was also awarded Best European Club of the 20th Century by the IFFHS on 11 May 2010. In June 2017, the team succeeded in becoming the first club to win back to back Champions Leagues, then made it three in a row in May 2018, extending their lead atop the UEFA club rankings.',
						logo: '/images/realmadrid.png',
						headcoach: 'Santiago Solan',
						league: 'La Liga',
						stadium: 'Santiago Bernabeu Stadium',
						website: 'https://www.realmadrid.com/',
					},
					{
						id: 'ars',
						title: 'Arsenal',
						country: 'England',
						description: 'Arsenal Football Club is a professional football club based in Islington, London, England, that plays in the Premier League, the top flight of English football. It has won 13 League titles, a record 13 FA Cups, two League Cups, the League Centenary Trophy, 15 FA Community Shields, one UEFA Cup Winners Cup and one Inter-Cities Fairs Cup. Arsenal was the first club from the South of England to join The Football League, in 1893, and they reached the First Division in 1904. Relegated only once, in 1913, they continue the longest streak in the top division, and have won the second-most top-flight matches in English football history. In the 1930s, Arsenal won five League Championships and two FA Cups, and another FA Cup and two Championships after the war. In 1970–71, they won their first League and FA Cup Double. Between 1989 and 2005, they won five League titles and five FA Cups, including two more Doubles. They completed the 20th century with the highest average league position. Arsène Wenger was the longest-serving manager and won the most trophies. He won a record 7 FA Cups, and his title-winning team set an English record for the longest top-flight unbeaten league run at 49 games between 2003 and 2004, receiving the nickname The Invincibles, and a special gold Premier League trophy. In 1886, Woolwich munitions workers founded the club as Dial Square. In 1913, the club crossed the city to Arsenal Stadium in Highbury, becoming close neighbours of Tottenham Hotspur, and creating the North London derby. In 2006, they moved to the nearby Emirates Stadium. In terms of revenue, Arsenal is the ninth highest-earning football club in the world, earned €487.6m in 2016–17 season.',
						logo: '/images/arsenal.png',
						headcoach: 'Unai Emery',
						league: 'Premier League',
						stadium: 'Emirates Stadium',
						website: 'https://www.arsenal.com/',
					},
					{
						id: 'barc',
						title: 'Barcelona',
						country: 'Spain',
						description: 'Futbol Club Barcelona, known simply as Barcelona and colloquially as Barça ([ˈbaɾsə]), is a professional football club based in Barcelona, Catalonia, Spain. Founded in 1899 by a group of Swiss, English and Catalan footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism, hence the motto "Més que un club" ("More than a club"). The official Barcelona anthem is the "Cant del Barça", written by Jaume Picas and Josep Maria Espinàs. Domestically, Barcelona has won 25 La Liga, 30 Copa del Rey, 13 Supercopa de España, 3 Copa Eva Duarte, and 2 Copa de la Liga trophies, as well as being the record holder for the latter four competitions. In international club football, Barcelona has won 20 European and World titles: 5 UEFA Champions League titles, a record 4 UEFA Cup Winners Cup, a joint record 5 UEFA Super Cup, a record 3 Inter-Cities Fairs Cup, and a joint record 3 FIFA Club World Cup. The club has a long-standing rivalry with Real Madrid; matches between the two teams are referred to as El Clásico. Barcelona is one of three founding members of the Primera División that have never been relegated from the top division since its inception in 1929, along with Athletic Bilbao and Real Madrid. In 2009, Barcelona became the first Spanish club to win the continental treble consisting of La Liga, Copa del Rey, and the UEFA Champions League, and also became the first Spanish football club to win six out of six competitions in a single year, by also winning the Spanish Super Cup, UEFA Super Cup, and FIFA Club World Cup. In 2011, the club became European champions again and won five trophies. This Barcelona team, which won 14 trophies in just 4 years under Pep Guardiola, is considered by some in the sport to be the greatest team of all time.',
						logo: '/images/barcelona.png',
						headcoach: 'Ernesto Valverde',
						league: 'La Liga',
						stadium: 'Camp Nou',
						website: 'https://www.fcbarcelona.com/en/',
					},
					{
						id: 'mal',
						title: 'Malaga',
						country: 'Spain',
						description: 'Málaga Club de Fútbol, or simply Málaga, is a Spanish football team based in Málaga, Spain. The team plays in Segunda División, the second division of Spanish football. They won the UEFA Intertoto Cup in 2002 and qualified for the following season UEFA Cup, reaching the quarter-final stages. They also qualified for the 2012–13 UEFA Champions League, where they were quarter-finalists. Since June 2010, the owner of the club has been Qatari investor Abdullah ben Nasser Al Thani.',
						logo: '/images/malaga.jpg',
						headcoach: 'Juan Muniz',
						league: 'Segunda Division',
						stadium: 'La Rosaleda',
						website: 'https://www.malagacf.com/en',
					},
					{
						id: 'rom',
						title: 'Roma',
						country: 'Italy',
						description: 'Associazione Sportiva Roma, commonly referred to as simply Roma, is a professional Italian football club based in Rome. Founded by a merger in 1927, Roma have participated in the top-tier of Italian football for all of their existence except for 1951–52. Roma have won Serie A three times, in 1941–42, 1982–83 and 2000–01, as well as winning nine Coppa Italia titles and two Supercoppa Italiana titles. In European competitions, Roma won the Inter-Cities Fairs Cup in 1960–61 and were runners-up in the 1983–84 European Cup and the 1990–91 UEFA Cup. Fifteen players have won the FIFA World Cup while playing at Roma: Ferraris, Guaita and Masetti (1934); Donati, Monzeglio and Serantoni (1938); Bruno Conti (1982); Rudi Voller and Berthold (1990); Aldair (1994); Candela (1998); Cafu (2002); Daniele De Rossi, Simone Perrotta and Francesco Totti (2006). Since 1953, Roma have played their home matches at the Stadio Olimpico, a venue they share with city rivals Lazio. With a capacity of over 72,000, it is the second-largest of its kind in Italy, with only the San Siro able to seat more. The club plan to move to a new stadium, though this is yet to start construction. Their club badge features a she-wolf, an allusion to the founding myth of Rome.',
						logo: '/images/roma.png',
						headcoach: 'Eusebio Di Francesco',
						league: 'Serie A',
						stadium: 'Stadio Olimpico',
						website: 'https://www.asroma.com/',
					}
				]
});