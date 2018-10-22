package com.tutorialsninja.automation.util;

import java.io.FileInputStream;
import java.io.FileNotFoundException;

public class PathHelper {
	
	public static String getBasePath(){
		return System.getProperty("user.dir");
	}
	
	public static String getResourcePath(String path){
		return getBasePath()+path;
	}
	
	
	public static FileInputStream getInputStreamResourcePath(String path) throws FileNotFoundException{
		return new FileInputStream(getResourcePath(path));
		
	}
	public static void main(String[] args) throws FileNotFoundException{
		System.out.println(getInputStreamResourcePath("/src/main/resources/ConfigurationFile/config.properties"));
	}

}
