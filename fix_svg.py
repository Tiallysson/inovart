import re

with open('public/images/Logo OFICIAL Inovart_backup.svg', 'rb') as f:
    content = f.read().decode('utf-8')

# O logo termina verticalmente em torno de y=1030 (baseado na clipPath do mascote)
# e vai de x=240 a x=1100 aproximadamente (baseado nos translates do texto)
# Vamos usar: x_min=230, y_min=680, largura=900, altura=400
# Isso da proporcao 900/400 = 2.25 (um pouco mais que 16/9=1.78, ok)

# Melhor ajuste: x=230, y=680, w=920, h=420 (~16:9 ideal seria w=746 para h=420)
# Para 16:9 exato com h=420: w = 420 * 16/9 = 746.6
# Vamos usar x=350, y=680, w=747, h=420

new_viewbox = '230 680 950 540'  # aprox 16:9, cobre todo o logo + texto

new_content = re.sub(r'viewBox="[^"]+"', f'viewBox="{new_viewbox}"', content, count=1)

with open('public/images/Logo OFICIAL Inovart.svg', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f'Done - viewBox: {new_viewbox}')
