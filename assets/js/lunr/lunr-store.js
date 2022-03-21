var store = [{
        "title": "让静态图片中的天空水面流动起来",
        "excerpt":"项目效果               ","categories": ["projects"],
        "tags": [],
        "url": "/projects/%E8%AE%A9%E9%9D%99%E6%80%81%E5%9B%BE%E7%89%87%E4%B8%AD%E7%9A%84%E5%A4%A9%E7%A9%BA%E6%B0%B4%E9%9D%A2%E6%B5%81%E5%8A%A8%E8%B5%B7%E6%9D%A5/",
        "teaser": "/assets/projects/2019-11-01/1.jpg"
      },{
        "title": "Newcompetions",
        "excerpt":"competions  内容  ","categories": ["competions"],
        "tags": [],
        "url": "/competions/newcompetions/",
        "teaser": "/assets/basic/teaser_default.jpg"
      },{
        "title": "Publications",
        "excerpt":"publications  内容  ","categories": ["publications"],
        "tags": [],
        "url": "/publications/publications/",
        "teaser": "/assets/basic/teaser_default.jpg"
      },{
        "title": "Newmath",
        "excerpt":"math  ","categories": ["math"],
        "tags": [],
        "url": "/math/newmath/",
        "teaser": "/assets/basic/teaser_default.jpg"
      },{
        "title": "图片信息统计",
        "excerpt":"统计单通道 def get_gray_hist(gray_image): # 图片, 使用的通道, mask, HistSize, 直方图柱的范围 hist= cv2.calcHist([gray_image], [0], None, [256], [0.0,255.0]) # 归一化 src, dst, min, max, norm_type cv2.normalize(hist, hist,0,500*0.9,cv2.NORM_MINMAX) # min_val, max_val, min_loc, max_loc = cv.minMaxLoc(hist) hist_img = np.zeros([500,256,3], np.uint8) for h, intensity in enumerate(hist): intensity = int(intensity) cv2.line(hist_img,(h,500), (h,500-intensity), (255,255,255)) return hist_img 统计多通道 ```python...","categories": ["codes"],
        "tags": [],
        "url": "/codes/%E5%9B%BE%E7%89%87%E4%BF%A1%E6%81%AF%E7%BB%9F%E8%AE%A1/",
        "teaser": "/assets/basic/teaser_default.jpg"
      },{
        "title": "图片操作",
        "excerpt":"图片合并 def merge(image1, image2): \"\"\" 两张图片等权重合并 :param image1: :param image2: :return: \"\"\" rows1 = image1.shape[0] cols1 = image1.shape[1] channels = image1.shape[2] for i in range(rows1): for j in range(cols1): for channel in range(channels): image1[i, j][channel] = int(image1[i, j][channel]/2 + image2[i, j][channel]/2) def add_icon(image, icon_image): \"\"\" 在image大图上加图标, icon_image为rgb小图 :param image: :param...","categories": ["codes"],
        "tags": [],
        "url": "/codes/%E5%9B%BE%E7%89%87%E6%93%8D%E4%BD%9C/",
        "teaser": "/assets/basic/teaser_default.jpg"
      },{
        "title": "数据增强",
        "excerpt":"import imutils import imutils.paths import os import cv2 import numpy as np import random import PIL.Image def random_salt(im, salt_num, diameter): \"\"\" 椒盐噪声 :param im: :param salt_num: :param diameter: 椒盐噪声半径 :return: \"\"\" assert diameter &gt; 1 radius = int(diameter/2) if not diameter % 2: diameter += 1 if im.shape[0] &lt; diameter...","categories": ["codes"],
        "tags": [],
        "url": "/codes/%E6%95%B0%E6%8D%AE%E5%A2%9E%E5%BC%BA/",
        "teaser": "/assets/basic/teaser_default.jpg"
      }]
