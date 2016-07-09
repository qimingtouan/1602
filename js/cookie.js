
//name_ww=ww;pwd_www=www

 function setCookie(name, value, iDay) 
				{
					var oDate=new Date();
					oDate.setDate(oDate.getDate()+iDay);
					document.cookie=name+'='+value+';expires='+oDate;
				}

			function getCookie(name)
			{
				var arr=document.cookie.split('; ');
				var i=0;
				for(i=0;i<arr.length;i++)
				{
					//arr2->['username', 'abc']
					var arr2=arr[i].split('=');
					if(arr2[0]==name)
					{	
						var getC = arr2[1];
						return getC;
					}
				}			
				return '';
			}

			function removeCookie(name)
			{
				setCookie(name, '1', -1);
			}