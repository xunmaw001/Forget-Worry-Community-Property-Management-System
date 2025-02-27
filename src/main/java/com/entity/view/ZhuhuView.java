package com.entity.view;

import com.entity.ZhuhuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 住户
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2021-05-09 10:58:53
 */
@TableName("zhuhu")
public class ZhuhuView  extends ZhuhuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ZhuhuView(){
	}
 
 	public ZhuhuView(ZhuhuEntity zhuhuEntity){
 	try {
			BeanUtils.copyProperties(this, zhuhuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
