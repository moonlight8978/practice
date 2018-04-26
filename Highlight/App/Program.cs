/*
 * Created by SharpDevelop.
 * User: _MoonLight_
 * Date: 2018-04-26
 * Time: 9:00 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace App
{
	class Program
	{
		public static void Main(string[] args)
		{
			List<String> wrongs = new List<String>{ "thừa", "lại", "đà" };
			string sample = @"Gã này thừa thế xoay mình lllại lại, tiện đà cầm thanh trường kiếm vừa chém vừa quát một tiếng 'Mau'. Nhát kiếm đến nhanh như chớp, gã trẻ tuổi không tài nào tránh kịp, bị chém trúng vào bắp vế bên trái. Bị thương gã bước loạng choạng, phải chống kiếm xuống đất mới đứng vững lại được. Gã trẻ tuổi toan đấu nữa, nhưng gã đứng tuổi đã tra kiếm vào bao tươi cười hỏi:\n- Chử sư đệ! Ngu huynh cảm ơn sư đệ đã nhường cuộc thắng cho. Sư đệ có đau không?\nGã trẻ tuổi họ Chử, sắc mặt nhợt nhạt, mím môi đáp:\n- Ða tạ Cung sư huynh có lòng tốt đã nhẹ đòn cho.";
			Splitter splitter = new Splitter(sample);
			List<Word> words = splitter.split();
			
			foreach (Word word in words) {
				if (wrongs.Contains(word.standard)) {
					sample = Regex.Replace(sample, @"\b" + word.original + @"\b", "000" + word.original + "000");
				}
			}
			
			Console.WriteLine(sample);
			
			Console.ReadKey();
		}
	}
}